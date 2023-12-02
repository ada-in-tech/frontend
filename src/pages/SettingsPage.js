import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const SettingsPage = () => {
    const [settings, setSettings] = useState({
        newEmail: '',
        newPassword: '',
        emailNotifications: false,
        makeProfilePublic: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace '/api/settings' with your actual endpoint
            await axios.post('/api/settings', settings);
            // Handle success (e.g., showing a success message)
        } catch (error) {
            console.error('Error updating settings:', error.message);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    return (
        <div className="auth-container">
            <div className="settings">
                <h1 className="heading-1">Account Settings</h1>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label className="input-field">
                        <span>New Email</span>
                        <input type="email" name="newEmail" value={settings.newEmail} onChange={handleChange} />
                    </label>
                    <label className="input-field">
                        <span>New Password</span>
                        <input type="password" name="newPassword" value={settings.newPassword} onChange={handleChange} />
                    </label>
                    <button className="button" type="submit">Update Account</button>
                </form>

                <div className="notification-settings">
                    <h2 className="heading-2">Notification Settings</h2>
                    <label className="checkbox-field">
                        <input type="checkbox" name="emailNotifications" checked={settings.emailNotifications} onChange={handleChange} />
                        Email Notifications
                    </label>
                </div>

                <div className="privacy-settings">
                    <h2 className="heading-2">Privacy Settings</h2>
                    <label className="checkbox-field">
                        <input type="checkbox" name="makeProfilePublic" checked={settings.makeProfilePublic} onChange={handleChange} />
                        Make Profile Public
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
