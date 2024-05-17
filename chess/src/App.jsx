import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Signup from './SignUp/Signup';
import Login from './LogIn/Login';
import Skill from './Skill/Skill';
import Final from './Final/Final';
// import GameInterface from './GameInterface/GameInterface';
function App() {
  return (

    <Routes>

      <Route path="/" element={<Header />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/final" element={<Final />} />
    
     
     
    </Routes>

  );
}

export default App;
