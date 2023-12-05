import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/form/InputField';
import SelectField from '../components/form/SelectField';
import Button from '../components/common/Button';
import '../styles/auth.css';
import { registerUser } from '../services/userService'; // Adjust the import path as needed

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'newcomer',
    });

    const userRoles = [
        { label: 'Newcomer to Tech', value: 'newcomer' },
        { label: 'Established Tech Professional', value: 'professional' },
        { label: 'Tech Company', value: 'company' },
        { label: 'Community/Advocacy Group', value: 'community' },
        { label: 'Admin', value: 'admin' },
    ];

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { confirmPassword, ...userData } = formData;
        console.log("Sending userData:", userData);
        try {
            await registerUser(userData);
            // Handle registration success, navigate to email verification page
            navigate('/verify-email');
        } catch (error) {
            console.error('Registration error:', error.message);
            // Optionally, show error to the user
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log("Updated formData:", formData);
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <InputField
                    label="Full Name or Company Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <InputField
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <SelectField
                    label="I am a"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    options={userRoles}
                />
                <Button type="submit">Register</Button>
                <p>
                    Already have an account? <Link to="/login" style={{ color: '#0077b6' }}>Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
