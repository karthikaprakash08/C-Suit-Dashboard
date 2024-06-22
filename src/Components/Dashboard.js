// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Header from './Header';
import Statistics from './Statistics';
import CourseList from './CourseList';
import CustomCalendar from './Calendar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div className='header-part'>
        <Header />
        <CustomCalendar />
        </div>
        <Statistics/>      
      </div>
      <div className="header-container">
        <CourseList />
      </div>
    </div>
  );
};

export default Dashboard;
