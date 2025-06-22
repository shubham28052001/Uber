import React from 'react'
import './index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import {Route, Routes } from 'react-router-dom'
const App = () => (
  <div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<UserSignup/>}/>
    <Route path='/captain-login' element={<CaptainLogin/>}/>
  <Route path='/captain-signup' element={<CaptainSignup/>}/>
  </Routes>

  </div>
)
export default App
