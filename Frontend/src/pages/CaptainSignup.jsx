import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext.jsx';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const SubmitHandler = async (e) => {
    e.preventDefault();

   const captainData = {
  fullname: {
    firstname: firstName,
    lastname: lastName,
  },
  email,
  password,
  vehicle: {
    color: vehicleColor,
    plate: vehiclePlate,
    capacity: parseInt(vehicleCapacity), // ✅ convert to number
    vehicleType,
  },
};

    console.log("Sending to backend:", captainData);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className='h-screen p-7 flex flex-col items-center justify-between'>
      <div>
        <img
          className='w-16 ml-2 mb-2'
          src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc"
          alt="Uber Logo"
        />

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

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Bike</option>
            </select>
          </div>

          <button className='bg-[#111] font-semibold text-white text-2xl px-4 py-4 border-gray-300 rounded-md p-2 mb-2 w-full'>
            Sign Up
          </button>
        </form>

        <p className='text-center'>
          Already have an account?
          <Link to='/captain-login' className='text-blue-600 font-bold text-xl'> Login here</Link>
        </p>
      </div>

      <div>
        <p className='text-s text-center leading-5'>
          This site is protected by reCAPTCHA to ensure your safety.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
