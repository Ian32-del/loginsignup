import React, { } from 'react';
import './App.css';
  
import {BrowserRouter, Routes, Route} from 'react-router-dom';
  
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
 
function App() {

  // Define your token function here
  const handleToken = () => {
    // Logic for handling token
    console.log('Token handled');
  };


  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
      <h1 className="page-header text-center">React and Python Flask Login Register</h1>
   
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage  token={handleToken} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
   
export default App;