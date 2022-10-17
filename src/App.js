//  import react from react 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//  import home from components
import Home from './pages/Home';
//  Gloval style
import './styles/App.css';
import './styles/increment.css'; 
// import './styles/Extra.css';
const App = () => {
  return (
    <div>
      <Navbar /> 
  
      <Routes>
    <Route path='/' element={<Home/>}/> 
      </Routes>
    </div>
  )
}

export default App;