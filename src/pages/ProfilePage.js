import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const ProfilePage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        bio: '',
        skills: [],
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/api/user/profile'); // Adjust the endpoint as necessary
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
                // Optionally, handle error (e.g., showing an error message)
            }
        };

        fetchUserProfile();
    }, []);

    const handleProfileUpdate = async () => {
        try {
            const response = await axios.put('/api/user/profile', user); // Adjust the endpoint and payload as necessary
            console.log('Profile updated:', response.data);
            // Optionally, handle successful update (e.g., showing a success message)
        } catch (error) {
            console.error('Error updating profile:', error.message);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="auth-container">
            <div className="profile">
                <h1 className="heading-1">{user.name}</h1>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
                <input type="email" name="email" value={user.email} onChange={handleChange} />
                <textarea name="bio" value={user.bio} onChange={handleChange}></textarea>
                {/* Handle skills input */}
                <button className="button" onClick={handleProfileUpdate}>Update Profile</button>
            </div>
        </div>
    );
};

export default ProfilePage;
