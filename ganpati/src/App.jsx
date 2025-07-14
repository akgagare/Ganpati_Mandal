import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Register from './Admin/Register'
import Login from './Admin/Login'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
       <Toaster position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute >
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/admin/register' element={<Register/>}/>
        <Route path='/admin/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
