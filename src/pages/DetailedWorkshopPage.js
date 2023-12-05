import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useParams } from 'react-router-dom';
import '../styles/card.css';

const DetailedWorkshopPage = () => {
    const { workshopId } = useParams();
    const [workshop, setWorkshop] = useState({ content: [] });

    useEffect(() => {
        const fetchWorkshop = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get(`/api/workshops/${workshopId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setWorkshop(response.data);
            } catch (error) {
                console.error('Error fetching workshop details:', error.message);
            }
        };

        fetchWorkshop();
    }, [workshopId]);

    const renderContent = () => {
        if (Array.isArray(workshop.content)) {
            return workshop.content.map((chapter, index) => (
                <li key={index}>{chapter}</li>
            ));
        } else if (typeof workshop.content === 'string') {
            // Example: If content is a string, split by a delimiter and map
            return workshop.content.split(',').map((chapter, index) => (
                <li key={index}>{chapter}</li>
            ));
        } else {
            return <li>Content format not supported</li>;
        }
    };

    // Optional: Loading state check
    if (!workshop) return <div className="card">Loading...</div>;

    return (
        <div className="card">
            <h1 className="card-title">{workshop.title}</h1>
            <img src={workshop.image} alt={workshop.title} className="card-image" />
            <p className="card-body">{workshop.description}</p>
            <ul>{renderContent()}</ul>
        </div>
    );
};

export default DetailedWorkshopPage;
