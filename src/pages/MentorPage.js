import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const ProfessionalPage = () => {
    const [professionals, setProfessionals] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const response = await axios.get('/api/professionals');
                setProfessionals(response.data);
            } catch (error) {
                console.error('Error fetching professionals:', error.message);
            }
        };

        fetchProfessionals();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredProfessionals = professionals.filter(
        professional => professional.user.name && professional.user.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="professional-page">
            <h1>Professionals</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProfessionals.map(professional => (
                    <Card key={professional._id} item={professional} className="professional-card" />
                ))}
            </div>
        </div>
    );
};

export default ProfessionalPage;
