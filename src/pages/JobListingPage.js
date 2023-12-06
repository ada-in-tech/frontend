import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import JobListingCard from '../components/cards/JobListingCard';
import '../styles/components.css';

const JobListingPage = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        const fetchJobListings = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/joblistings', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setJobListings(response.data);
            } catch (error) {
                console.error('Error fetching job listings:', error.message);
            }
        };

        fetchJobListings();
    }, []);

    return (
        <div className="job-listings-page">
            <h1 className="h1">Job Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobListings.map((jobListing, index) => (
                    <JobListingCard key={index} jobListing={jobListing} />
                ))}
            </div>
        </div>
    );
};

export default JobListingPage;
