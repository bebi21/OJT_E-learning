import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './page/login register/Login'
import Register from './page/register/Register'
import { Route, Routes } from 'react-router-dom'
import Hamburger from './components/Hamburger'

function App() {

  return (
    <>
    <Hamburger/>
    {/* <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes> */}
    
    </>
  )
}

export default App
