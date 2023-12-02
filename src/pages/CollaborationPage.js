import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import '../styles/components.css';

const CollaborationPage = () => {
    const [collaborations, setCollaborations] = useState([]);

    useEffect(() => {
        const fetchCollaborations = async () => {
            try {
                const response = await axios.get('/api/collaborations');
                setCollaborations(response.data);
            } catch (error) {
                console.error('Error fetching collaborations:', error.message);
            }
        };

        fetchCollaborations();
    }, []);

    return (
        <div className="collaboration-page">
            <h1>Collaborations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collaborations.map(collab => (
                    <Card key={collab.id} item={collab} className="collaboration-card" />
                ))}
            </div>
        </div>
    );
};

export default CollaborationPage;
