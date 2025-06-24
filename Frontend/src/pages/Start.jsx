import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1736435070040-c98215ce275e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex pt-8 justify-between flex-col w-full'>
        <img className='w-20 ml-9' src="https://imgs.search.brave.com/dM7ayL6GDeUdg0B9CD0crlUFx0UiJNfkV76vRd3YMGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='font-bold text-3xl'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-4 rounded mt-2'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
