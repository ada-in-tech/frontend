import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useParams } from 'react-router-dom';
import '../styles/card.css';

const DetailedWorkshopPage = () => {
    const { workshopId } = useParams();
    const [workshop, setWorkshop] = useState(null);

    useEffect(() => {
        const fetchWorkshop = async () => {
            try {
                const response = await axios.get(`/api/workshops/${workshopId}`);
                setWorkshop(response.data);
            } catch (error) {
                console.error('Error fetching workshop details:', error.message);
            }
        };

        fetchWorkshop();
    }, [workshopId]);

    if (!workshop) return <div className="card">Workshop not found</div>;

    return (
        <div className="card">
            <h1 className="card-title">{workshop.title}</h1>
            <img src={workshop.imageUrl} alt={workshop.title} className="card-image" />
            <p className="card-body">{workshop.description}</p>
            <ul>
                {workshop.agenda.map((session, index) => (
                    <li key={index}>{session}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedWorkshopPage;
