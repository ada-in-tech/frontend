import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import '../styles/components.css';

const ResourcePage = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await axios.get('/api/resources');
                setResources(response.data);
            } catch (error) {
                console.error('Error fetching resources:', error.message);
                // Optionally, handle error (e.g., showing an error message)
            }
        };

        fetchResources();
    }, []);

    return (
        <div className="resource-page">
            <h1>Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map(resource => (
                    <Card key={resource.id} item={resource} className="resource-card" />
                ))}
            </div>
        </div>
    );
};

export default ResourcePage;
