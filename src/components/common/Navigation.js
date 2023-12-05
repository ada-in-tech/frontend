import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const NavigationBar = () => {
    const { userType } = useUser();
    console.log("Current User Type:", userType);

    return (
        <ul className="navigation">
            {/* Conditional Links Based on User Type */}
            {userType === 'guest' && (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </>
            )}

            {userType === 'newcomer' && (
                <>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/job-listings">Job Search</Link></li>
                    <li><Link to="/mentor">Find Mentor</Link></li>
                    <li><Link to="/collaboration">Your Mentors</Link></li>
                    <li><Link to="/campaign">Campaigns</Link></li>
                    <li><Link to="/report-incident">Report Bias</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </>
            )}

            {userType === 'professional' && (
                <>
                    <li><Link to="/workshops">Workshops</Link></li>
                    <li><Link to="/newcomer">Newcomers</Link></li>
                    <li><Link to="/mentor">Mentors</Link></li>
                    <li><Link to="/course-creation">Create Course</Link></li>
                    <li><Link to="/resource-creation">Create Resource</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/campaign">Campaigns</Link></li>
                    <li><Link to="/collaboration">Collaborations</Link></li>
                    <li><Link to="/community">Communities</Link></li>
                    <li><Link to="/company">Companies</Link></li>
                    <li><Link to="/report-incident">Report Incident</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </>
            )}

            {userType === 'company' && (
                <>
                    <li><Link to="/job-posting">Post Jobs</Link></li>
                    <li><Link to="/job-listings">Jobs</Link></li>
                    <li><Link to="/newcomer">Newcomers</Link></li>
                    <li><Link to="/mentor">Mentors</Link></li>
                    <li><Link to="/company">Companies</Link></li>
                    <li><Link to="/community">Communities</Link></li>
                    <li><Link to="/course-creation">Create Course</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/workshop-creation">Create Workshop</Link></li>
                    <li><Link to="/workshops">Workshops</Link></li>
                    <li><Link to="/resource-creation">Create Resource</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/campaign-creation">Create Campaign</Link></li>
                    <li><Link to="/campaign">Campaigns</Link></li>
                    <li><Link to="/collaboration">Collaborations</Link></li>
                    <li><Link to="/report-incident">Report Incident</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </>
            )}

            {userType === 'community' && (
                <>
                    <li><Link to="/campaign-creation">Create Campaign</Link></li>
                    <li><Link to="/campaign">Campaigns</Link></li>
                    <li><Link to="/mentor">Mentors</Link></li>
                    <li><Link to="/company">Companies</Link></li>
                    <li><Link to="/collaboration">Collaborations</Link></li>
                    <li><Link to="/resource-creation">Create Resources</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/report-incident">Report Incident</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </>
            )}

            {userType === 'admin' && (
                <>
                    <li><Link to="/user-management">User Management</Link></li>
                    <li><Link to="/content-moderation">Content Management</Link></li>
                    <li><Link to="/reports-feedback">Reports and Feedback</Link></li>
                </>
            )}

        </ul>
    );
};

export default NavigationBar;
