import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import '../styles/components.css';

const JobListingsPage = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        const fetchJobListings = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobListings(response.data);
            } catch (error) {
                console.error('Error fetching job listings:', error.message);
                // Optionally, handle error (e.g., showing an error message)
            }
        };

        fetchJobListings();
    }, []);

    return (
        <div className="job-listings-page">
            <h1>Job Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobListings.map(job => (
                    <Card key={job.id} item={job} className="job-card" />
                ))}
            </div>
        </div>
    );
};

export default JobListingsPage;
