//  import react from react 
import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//  import home from components
import Home from './pages/Home';
//  Gloval style
import './styles/App.css';
// import './styles/Extra.css';
const App = () => {
  return (
    <div>
      <Navbar /> 
  
      <Routes>
    <Route path='/home' element={<Home/>}/> 


    {/* Navigate toother page */}
    <Route
       path="*"
       element={<Navigate to="/home" replace />}
   />

      </Routes>
    </div>
  )
}

export default App;