import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const NewcomerPage = () => {
    const [newcomers, setNewcomers] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchNewcomers = async () => {
            try {
                const response = await axios.get('/api/newcomers');
                setNewcomers(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching newcomers:', error.message);
                // Optionally, handle error (e.g., showing an error message)
            }
        };

        fetchNewcomers();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredNewcomers = newcomers.filter(newcomer =>
        newcomer.user.name.toLowerCase().includes(filterValue.toLowerCase())
    );


    return (
        <div className="newcomer-page">
            <h1>Newcomers</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredNewcomers.map(newcomer => (
                    <Card key={newcomer._id} item={newcomer} className="newcomer-card" />
                ))}
            </div>
        </div>
    );
};

export default NewcomerPage;
