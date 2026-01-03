import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import Adashboard from './admin/Adashboard'
import Cdashboard from './coustomers/Cdashboard'

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route  path=" /admin/dashboard" element={
              <ProtectedRoute>
                 <Adashboard/>
              </ProtectedRoute>
          }/>
          <Route  path=" /coustomers/dashboard" element={
              <ProtectedRoute>
                 <Cdashboard/>
              </ProtectedRoute>
          }/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
