import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const {captain, setCaptain} = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

 const SubmitHandler = async (e) => {
  e.preventDefault();

  const captain = {
    email: email,
    password: password
  };

  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if (response.status === 200) {
  setCaptain(response.data.captain);
  localStorage.setItem('captain', JSON.stringify(response.data.captain));
  localStorage.setItem('token', response.data.token); // ✅ Add this line
  navigate('/captain-home');
}
  } catch (error) {
    console.error("Login failed:", error.response?.data?.message || error.message);
    // Show toast or error to user if needed
  }

  setEmail('');
  setPassword('');
};

   
  return (
    <div className=' h-screen p-7 flex flex-col items-center justify-between '>
      <div>
         <img className='w-20 ml-1 mb-4' src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc" alt="" />
      <form onSubmit={(e)=>
      {SubmitHandler(e)  }
    }
      >
        <h3 className='text-2xl font-bold mb-2'>What's your Email</h3>
        <input 
        value={email}
        onChange={(e) => {
         setEmail(e.target.value)
        }}
        
        type="Email" 
        className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
        required 
        placeholder='email@example.com' />


        <h3 className='text-2xl font-bold mb-2'>What's your Password</h3>
        <input 
         value={password}
        onChange={(e) => {
         setPassword(e.target.value)
        }}
        className='bg-gray-100 border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
        type="password" 
        required 
        placeholder='Enter password' />
        <button className='bg-[#111] font-semibold text-white text-2xl mt-2 px-4 py-4 border-gray-300 rounded-md p-2 mb-4 w-full'>Login</button>

        
      </form>
      <p className='text-center'>join a fleet?<Link to='/captain-signup' className='text-blue-600 font-bold'>Register as a Captain</Link></p>

      
    </div>

   <div>
    <Link to='/login' className='bg-orange-500 flex items-center justify-center font-semibold text-white text-2xl mt-5 px-9 py-4 border-gray-300 rounded-md p-2 mb-2 w-full' >Sign in as user</Link>
   </div>
    </div>
  )
}
export default CaptainLogin
