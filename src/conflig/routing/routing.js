import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/login'
import SignUp from '../../pages/signUp'
import Dashboard from '../component/dashboard'

export default function Routing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/:id' element={<Dashboard />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
