import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token',data.token);
        
        navigate('/home');
      }
      setEmail('');
        setPassword('');

    } catch (error) {
    console.error("Login error:", error);
    alert(error.response?.data?.message || "Login failed. Please try again.");
  }

  };

  return (
    <div className='h-screen p-7 flex flex-col items-center justify-between'>
      <div>
        <img
          className='w-16 ml-2 mb-2'
          src="https://imgs.search.brave.com/dM7ayL6GDeUdg0B9CD0crlUFx0UiJNfkV76vRd3YMGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n"
          alt=""
        />

        <form onSubmit={SubmitHandler}>
          <h3 className='text-2xl font-bold mb-2'>What's your Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
            required
            placeholder='email@example.com'
          />

          <h3 className='text-2xl font-bold mb-2'>What's your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
            required
            placeholder='Enter password'
          />

          <button className='bg-[#111] font-semibold text-white text-2xl px-4 py-4 border-gray-300 rounded-md p-2 mb-4 w-full'>
            Login
          </button>
         alert("Login Successful")
        </form>

        <p className='text-center'>
          New here? <Link to='/signup' className='text-blue-600 font-bold'>Create new Account</Link>
        </p>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='bg-green-500 flex items-center justify-center font-semibold text-white text-2xl mt-5 px-9 py-4 border-gray-300 rounded-md p-2 mb-4 w-full'
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default Login;
