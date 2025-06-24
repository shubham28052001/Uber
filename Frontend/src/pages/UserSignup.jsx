import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext.jsx';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const SubmitHandler = async (e) => {
  e.preventDefault();

  const newUser = {
    fullname: {
      firstname: firstName,
      lastname: lastName,
    },
    email: email,
    password: password
  };

  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    console.log("Sent user:", newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

  } catch (error) {
    console.error("Signup error:", error.response?.data);

    // ✅ Show detailed validation or backend error
    alert(
      error.response?.data?.errors?.[0]?.msg ||  // validation error from express-validator
      error.response?.data?.error ||             // backend error like "Email already exists"
      "Signup failed. Please try again."         // fallback
    );
  }

  // ✅ Clear form after submission
  setEmail("");
  setFirstName("");
  setLastName("");
  setPassword("");
};


  return (
    <div className='h-screen p-7 flex flex-col items-center justify-between'>
      <div>
        <img className='w-16 ml-2 mb-2' src="https://imgs.search.brave.com/dM7ayL6GDeUdg0B9CD0crlUFx0UiJNfkV76vRd3YMGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n" alt="" />
        
        <form onSubmit={SubmitHandler}>
          <h3 className='text-2xl font-bold mb-2'>What's your name</h3>
          <div className='flex gap-4'>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
              placeholder='First Name'
              required
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
              placeholder='Last Name'
              required
            />
          </div>

          <h3 className='text-2xl font-bold mb-2'>What's your Email</h3>
          <input
            type="email"
            className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
            placeholder='Email Address'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-2xl font-bold mb-2'>Create Password</h3>
          <input
            type="password"
            className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='bg-[#111] font-semibold text-white text-2xl px-4 py-4 border-gray-300 rounded-md p-2 mb-4 w-full'>Sign Up</button>
        </form>

        <p className='text-center'>
          Already have an account?
          <Link to='/login' className='text-blue-600 font-bold text-xl'> Login here</Link>
        </p>
      </div>

      <div>
        <p className='text-s text-center leading-5'>
          This site is protected by reCAPTCHA to ensure your <span className='underline'>Google safety</span>.
          We use advanced verification to prevent spam and unauthorized access.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
