import React from 'react';
import Button from '../components/common/Button';
import axios from '../services/api';
import '../styles/auth.css';

const EmailVerificationPage = () => {
    const handleResendEmail = async () => {
        // Replace '/api/resend-verification' with your actual endpoint
        try {
            await axios.post('/api/resend-verification');
            alert('Verification email resent!');
        } catch (error) {
            console.error('Error resending email:', error.message);
        }
    };

    return (
        <div className="auth-container">
            <h1>Email Verification</h1>
            <p>Please check your email to verify your account.</p>
            <Button onClick={handleResendEmail}>
                Resend Email
            </Button>
        </div>
    );
}
export default EmailVerificationPage;
