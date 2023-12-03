import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { useUser } from '../contexts/UserContext';
import { decodeToken } from '../utils/helper';

const ProfilePage = () => {
    const { userType } = useUser();

    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        bio: '',
        profilePicture: '',
        skills: [],
        interests: [],
        linkedIn: '',
        github: '',
        role: '', // To determine which role-specific fields to display
    });

    const [roleSpecificInfo, setRoleSpecificInfo] = useState({
        // Initialize with all possible fields that may be used, with defaults
        description: '',
        focusArea: '',
        website: '',
        location: '',
        goals: [],
        challenges: [],
        experience: '',
        currentRole: '',
        industry: '',
        areasOfExpertise: [],
        certifications: [],
        // ... any other fields that are specific to certain roles
    });


    useEffect(() => {
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const fetchUserProfile = async () => {
            const token = localStorage.getItem('token');
            if (!userId || !token) {
                console.error('Error: User ID or token is not available.');
                return;
            }

            try {
                const response = await axios.get(`/api/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserProfile({ ...response.data });
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        };


        fetchUserProfile();
    }, []);

    const handleProfileUpdate = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        if (!userId) {
            console.error('Error: User ID is not available for profile update.');
            return;
        }

        try {
            const response = await axios.put(`/api/users/${userId}`, userProfile, {
                headers: {
                    Authorization: `Bearer ${token}`  // Include the token in the Authorization header
                }
            });
            console.log('Profile updated:', response.data);
            // Optionally, update the user context or local state with the new profile information
        } catch (error) {
            console.error('Error updating profile:', error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // For array fields, split string by commas and trim whitespace
        if (['skills', 'interests', 'areasOfExpertise', 'certifications', 'goals', 'challenges'].includes(name)) {
            setUserProfile({ ...userProfile, [name]: value.split(',').map(s => s.trim()) });
        } else {
            setUserProfile({ ...userProfile, [name]: value });
        }
    };

    const handleRoleSpecificChange = (e) => {
        const { name, value } = e.target;
        setRoleSpecificInfo({ ...roleSpecificInfo, [name]: value });
    };

    return (
        <div className="container mx-auto mt-10 p-5 bg-white shadow rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-10">User Profile</h1>

            {/* Display Current Profile Information */}
            <div className="mb-10">
                {userProfile.profilePicture && (
                    <img src={userProfile.profilePicture} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                )}
                <p className="text-gray-700 mb-2"><strong>Name:</strong> {userProfile.name}</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> {userProfile.email}</p>
                {userProfile.linkedIn && <p className="text-gray-700 mb-2"><strong>LinkedIn:</strong> {userProfile.linkedIn}</p>}
                {userProfile.github && <p className="text-gray-700 mb-2"><strong>GitHub:</strong> {userProfile.github}</p>}
                <p className="text-gray-700 mb-2"><strong>Bio:</strong> {userProfile.bio}</p>
                <p className="text-gray-700 mb-2"><strong>Skills:</strong> {userProfile.skills.join(', ')}</p>
                <p className="text-gray-700 mb-2"><strong>Interests:</strong> {userProfile.interests.join(', ')}</p>
                {/* Display role-specific information based on userType */}
                {userType === 'community' && (
                    <>
                        <p className="text-gray-700 mb-2"><strong>Description:</strong> {roleSpecificInfo.description}</p>
                        <p className="text-gray-700 mb-2"><strong>Focus Area:</strong> {roleSpecificInfo.focusArea}</p>
                        <p className="text-gray-700 mb-2"><strong>Website:</strong> {roleSpecificInfo.website}</p>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> {roleSpecificInfo.location}</p>
                    </>
                )}

                {userType === 'professional' && (
                    <>
                        <p className="text-gray-700 mb-2"><strong>Experience:</strong> {roleSpecificInfo.experience}</p>
                        <p className="text-gray-700 mb-2"><strong>Current Role:</strong> {roleSpecificInfo.currentRole}</p>
                        <p className="text-gray-700 mb-2"><strong>Industry:</strong> {roleSpecificInfo.industry}</p>
                        <p className="text-gray-700 mb-2"><strong>Areas of Expertise:</strong> {roleSpecificInfo.areasOfExpertise.join(', ')}</p>
                        <p className="text-gray-700 mb-2"><strong>Certifications:</strong> {roleSpecificInfo.certifications.join(', ')}</p>
                    </>
                )}

                {userType === 'company' && (
                    <>
                        <p className="text-gray-700 mb-2"><strong>Description:</strong> {userProfile.description}</p>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> {userProfile.location}</p>
                        <p className="text-gray-700 mb-2"><strong>Industry:</strong> {userProfile.industry}</p>
                        <p className="text-gray-700 mb-2"><strong>Website:</strong> {userProfile.website}</p>
                    </>
                )}

                {userType === 'newcomer' && (
                    <>
                        <p className="text-gray-700 mb-2"><strong>Goals:</strong> {roleSpecificInfo.goals.join(', ')}</p>
                        <p className="text-gray-700 mb-2"><strong>Challenges:</strong> {roleSpecificInfo.challenges.join(', ')}</p>
                    </>
                )}

            </div>

            <h2 className="text-2xl font-bold text-center mb-8">Edit Profile</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className="block">
                        <span className="text-gray-700">Profile Picture URL</span>
                        <input
                            type="text"
                            name="profilePicture"
                            value={userProfile.profilePicture}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            placeholder="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg"
                        />
                    </label>
                </div>
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        name="name"
                        value={userProfile.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={userProfile.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">LinkedIn Profile</span>
                    <input
                        type="text"
                        name="linkedIn"
                        value={userProfile.linkedIn}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">GitHub Profile</span>
                    <input
                        type="text"
                        name="github"
                        value={userProfile.github}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </label>
                <div className="md:col-span-2">
                    <label className="block">
                        <span className="text-gray-700">Bio</span>
                        <textarea
                            name="bio"
                            value={userProfile.bio}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            rows="3"
                        ></textarea>
                    </label>
                </div>
                <div className="md:col-span-2">
                    <label className="block">
                        <span className="text-gray-700">Skills (comma-separated)</span>
                        <input
                            type="text"
                            name="skills"
                            value={userProfile.skills.join(', ')}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </label>
                </div>
                <div className="md:col-span-2">
                    <label className="block">
                        <span className="text-gray-700">Interests (comma-separated)</span>
                        <input
                            type="text"
                            name="interests"
                            value={userProfile.interests.join(', ')}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </label>
                </div>
                {/* Repeat the above pattern for other fields as necessary */}
                {/* Community Group specific fields */}
                {userType === 'community' && (
                    <>
                        <div className="md:col-span-2">
                            <label className="block">
                                <span className="text-gray-700">Description</span>
                                <textarea
                                    name="description"
                                    value={roleSpecificInfo.description || ''}
                                    onChange={handleRoleSpecificChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    rows="3"
                                ></textarea>
                            </label>
                        </div>
                        <label className="block">
                            <span className="text-gray-700">Focus Area</span>
                            <input
                                type="text"
                                name="focusArea"
                                value={roleSpecificInfo.focusArea || ''}
                                onChange={handleRoleSpecificChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Website</span>
                            <input
                                type="text"
                                name="website"
                                value={roleSpecificInfo.website || ''}
                                onChange={handleRoleSpecificChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Location</span>
                            <input
                                type="text"
                                name="location"
                                value={roleSpecificInfo.location || ''}
                                onChange={handleRoleSpecificChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </label>
                    </>
                )}

                {/* Professional specific fields */}
                {userType === 'professional' && (
                    <>
                        <label className="block">
                            <span className="text-gray-700">Experience</span>
                            <input
                                type="text"
                                name="experience"
                                value={roleSpecificInfo.experience || ''}
                                onChange={handleRoleSpecificChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Current Role</span>
                            <input
                                type="text"
                                name="currentRole"
                                value={roleSpecificInfo.currentRole || ''}
                                onChange={handleRoleSpecificChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Industry</span>
                            <input
                                type="text"
                                name="industry"
                                value={roleSpecificInfo.industry || ''}
                                onChange={handleRoleSpecificChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </label>
                        <div className="md:col-span-2">
                            <label className="block">
                                <span className="text-gray-700">Areas of Expertise (comma-separated)</span>
                                <input
                                    type="text"
                                    name="areasOfExpertise"
                                    value={roleSpecificInfo.areasOfExpertise.join(', ')}
                                    onChange={handleRoleSpecificChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block">
                                <span className="text-gray-700">Certifications (comma-separated)</span>
                                <input
                                    type="text"
                                    name="certifications"
                                    value={roleSpecificInfo.certifications.join(', ')}
                                    onChange={handleRoleSpecificChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </label>
                        </div>
                    </>
                )}

                {/* Company specific fields */}
                {userType === 'company' && (
                    <>
                        <div className="md:col-span-2">
                            <label className="block">
                                <span className="text-gray-700">Description</span>
                                <textarea
                                    name="description"
                                    value={userProfile.description || ''}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    rows="3"
                                    placeholder="Describe your company"
                                ></textarea>
                            </label>
                        </div>
                        <label className="block">
                            <span className="text-gray-700">Location</span>
                            <input
                                type="text"
                                name="location"
                                value={userProfile.location || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                placeholder="Company location"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Industry</span>
                            <input
                                type="text"
                                name="industry"
                                value={userProfile.industry || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                placeholder="Industry sector"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Website</span>
                            <input
                                type="text"
                                name="website"
                                value={userProfile.website || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                placeholder="https://yourcompanywebsite.com"
                            />
                        </label>
                    </>
                )}

                {/* Newcomer specific fields */}
                {userType === 'newcomer' && (
                    <>
                        <div className="md:col-span-2">
                            <label className="block">
                                <span className="text-gray-700">Goals</span>
                                <input
                                    type="text"
                                    name="goals"
                                    value={Array.isArray(userProfile.goals) ? userProfile.goals.join(', ') : ''}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    placeholder="What are your goals? (comma-separated)"
                                />
                            </label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block">
                                <span className="text-gray-700">Challenges</span>
                                <input
                                    type="text"
                                    name="challenges"
                                    value={Array.isArray(userProfile.challenges) ? userProfile.challenges.join(', ') : ''}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    placeholder="Any challenges you're facing? (comma-separated)"
                                />
                            </label>
                        </div>
                    </>
                )}

                {/* ... */}
                <div className="md:col-span-2 text-right">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
                        onClick={handleProfileUpdate}
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;
