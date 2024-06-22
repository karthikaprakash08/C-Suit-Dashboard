// src/App.js
import React from 'react';
import { AppProvider } from './context/AppContext';
import Dashboard from './Components/Dashboard';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Courses from './Components/Courses';
import Profile from './Components/Profile';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={ <Dashboard />}/>
        <Route path="/Courses" element={ <Courses/>}/>
        <Route path="/Profile" element={ <Profile/>}/>
      </Routes>
     
      
    </AppProvider>
  );
};

export default App;
