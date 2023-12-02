import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import WorkshopCard from '../components/cards/WorkshopCard';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const WorkshopPage = () => {
    const [workshops, setWorkshops] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchWorkshops = async () => {
            try {
                // Replace '/api/workshops' with your actual endpoint
                const response = await axios.get('/api/workshops');
                setWorkshops(response.data);
            } catch (error) {
                console.error('Error fetching workshops:', error);
            }
        };
        fetchWorkshops();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredWorkshops = workshops.filter(workshop =>
        workshop.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div>
            <h1>Workshops</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }]} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredWorkshops.map(workshop => (
                    <WorkshopCard key={workshop.id} {...workshop} />
                ))}
            </div>
        </div>
    );
};

export default WorkshopPage;
