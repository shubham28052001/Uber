import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [userdata, setUserdata] = useState('');

  const SubmitHandler=(e)=>{
   e.preventDefault();
   setUserdata({
    email: email,
    password: password
   })
   console.log(userdata);
   setEmail('');
    setPassword('');
   
  }
  return (
    <div className=' h-screen p-7 flex flex-col items-center justify-between '>
      <div>
         <img className='w-16 ml-2 mb-2' src="https://imgs.search.brave.com/dM7ayL6GDeUdg0B9CD0crlUFx0UiJNfkV76vRd3YMGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n" alt="" />
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
        <button className='bg-[#111] font-semibold text-white text-2xl px-4 py-4 border-gray-300 rounded-md p-2 mb-4 w-full'>Login</button>

        
      </form>
      <p className='text-center'>New here?<Link to='/signup' className='text-blue-600 font-bold'>Create new Account</Link></p>

      
    </div>

   <div>
    <Link to='/captain-login' className='bg-green-500 flex items-center justify-center font-semibold text-white text-2xl mt-5 px-9 py-4 border-gray-300 rounded-md p-2 mb-4 w-full' >Sign up as Captain</Link>
   </div>
    </div>
  )
}

export default Login
