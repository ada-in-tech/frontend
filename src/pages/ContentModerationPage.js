import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import ContentTable from '../components/common/ContentTable';
import '../styles/components.css';

const ContentModerationPage = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const fetchContents = async () => {
            const token = localStorage.getItem('token');
            try {
                // Fetch each content type and merge them
                const courses = await axios.get('/api/courses', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const jobListings = await axios.get('/api/joblistings', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const workshops = await axios.get('/api/workshops', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const campaigns = await axios.get('/api/campaigns', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const resources = await axios.get('/api/resources', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Combine all contents into one array
                const allContents = [
                    ...courses.data.map(item => ({ ...item, type: 'Course' })),
                    ...jobListings.data.map(item => ({ ...item, type: 'JobListing' })),
                    ...workshops.data.map(item => ({ ...item, type: 'Workshop' })),
                    ...campaigns.data.map(item => ({ ...item, type: 'Campaign' })),
                    ...resources.data.map(item => ({ ...item, type: 'Resource' })),
                ];

                setContents(allContents);
            } catch (error) {
                console.error('Error fetching contents:', error);
            }
        };

        fetchContents();
    }, []);

    const handleDeleteContent = async (contentId, type) => {
        try {
            // Deleting content based on its type
            await axios.delete(`/api/${type.toLowerCase()}s/${contentId}`);
            setContents(contents.filter(content => content._id !== contentId));
        } catch (error) {
            console.error('Error deleting content:', error);
        }
    };

    return (
        <div>
            <h1 className="h1">Content Moderation</h1>
            <ContentTable data={contents} onDeleteContent={handleDeleteContent} />
        </div>
    );
};

export default ContentModerationPage;
