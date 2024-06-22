// src/components/Profile.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    companyName: 'Tech Solutions Inc.',
    designation: 'Chief Executive Officer',
    linkedIn: 'https://linkedin.com/in/johndoe',
    bio: 'Experienced leader in the tech industry with over 20 years of experience.',
  });
  const [profileImage, setProfileImage] = useState('path/to/default-profile.jpg');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save profileData to the server or local storage here
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h2 style={{color:"#8949FF"}}>Profile</h2>
        <div className="profile-card">
          <div className="profile-header">
            <img src={"./images/user-avatar1.png"} alt="Profile" className="profile-image" />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="image-upload"
              />
            )}
          </div>
          <div className="profile-body">
            <div className="profile-column">
              <div className="profile-details">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-details">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-details">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-details">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="profile-column">
              <div className="profile-details">
                <label>Company Name:</label>
                <input
                  type="text"
                  name="companyName"
                  value={profileData.companyName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-details">
                <label>Designation:</label>
                <input
                  type="text"
                  name="designation"
                  value={profileData.designation}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-details">
                <label>LinkedIn:</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={profileData.linkedIn}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-details">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <button onClick={isEditing ? handleSaveClick : handleEditClick}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
