//  import react from react 
import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//  import home from components
import Home from './pages/Home';
import About from './pages/About'; 
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Faqs from './pages/Faqs';
import Update from './pages/Update';
import Support from './pages/Support';
import NotFound from './pages/404/NotFound';
import Dashboard from "./pages/Dashbaord/Dashboard";
//  Gloval style
import './styles/App.css';
import Setting from './pages/Setting';
// import './styles/Extra.css';
const App = () => {
  return (
    <div>
      <Navbar /> 
  
      <Routes>
    <Route path='/home' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/> 
    <Route path='/products' element={<Product/>}/> 
    <Route path='/pricing' element={<Pricing/>}/> 
    <Route path='/faqs' element={<Faqs/>}/> 
    <Route path='/update' element={<Update/>}/> 
    <Route path='/support' element={<Support/>}/> 
    <Route path='/setting' element={<Setting/>}/> 
    <Route path='404' element={<NotFound  />}  />
     {/* dashbaord route */}
     <Route path='/dashboard' element={<Dashboard/>} /> 

    {/* Navigate toother page */}
    <Route
       path="/"
       element={<Navigate to="/home" replace />}
   />
    <Route
       path="*"
       element={<Navigate to="/404" replace />}
   />

      </Routes>
    </div>
  )
}

export default App;