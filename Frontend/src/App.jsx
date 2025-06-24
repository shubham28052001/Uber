import React from 'react'
import './index.css'
import Start from './pages/Start.jsx'
import Login from './pages/Login.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import Home from './pages/Home.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import CaptainProtectedWrapper from './pages/CaptainProtectWrapper.jsx'
import Userlogout from './pages/Userlogout.jsx'
import {Route, Routes } from 'react-router-dom'
import CaptainHome from './pages/CaptainHome.jsx'
const App = () => (
  <div>
  <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<UserSignup/>}/>
    <Route path='/captain-login' element={<CaptainLogin/>}/>
  <Route path='/captain-signup' element={<CaptainSignup/>}/>
  <Route path='/home' element={
    <UserProtectedWrapper>
      <Home></Home>
    </UserProtectedWrapper>
  }/>
    <Route path='/user/logout' element={<UserProtectedWrapper>
      <Userlogout/>
    </UserProtectedWrapper>}/>
  <Route path='/captain-home' element={<CaptainProtectedWrapper>
      <CaptainHome/>
    </CaptainProtectedWrapper>}/>

  </Routes>

  </div>
)
export default App
