import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const CollaborationPage = () => {
    const [collaborations, setCollaborations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const fetchCollaborations = async () => {
            try {
                const response = await axios.get(`/api/collaborations/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Collaborations:", response.data);
                if (response.data.length === 0) {
                    setError('No collaborations found.');
                    return;
                }
                setCollaborations(response.data);
            } catch (error) {
                setError('Error fetching collaborations: ' + error.message);
            }
        };

        fetchCollaborations();
    }, []);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="collaboration-page">
            <h1 className="h1">Collaborations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collaborations.map(collab => (
                    <Card key={collab._id} item={collab.receiver} className="collaboration-card" />
                ))}
            </div>
        </div>
    );
};

export default CollaborationPage;
