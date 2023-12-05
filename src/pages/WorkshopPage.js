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
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/workshops', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setWorkshops(response.data);
            } catch (error) {
                console.error('Error fetching workshops:', error.message);
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
        <div className="workshop-page">
            <h1>Workshops</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options as needed */]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredWorkshops.map(workshop => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                ))}
            </div>
        </div>
    );
};

export default WorkshopPage;
