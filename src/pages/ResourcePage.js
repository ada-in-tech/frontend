import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import ResourceCard from '../components/cards/ResourceCard';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const ResourcePage = () => {
    const [resources, setResources] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchResources = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/resources', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setResources(response.data);
            } catch (error) {
                console.error('Error fetching resources:', error.message);
            }
        };

        fetchResources();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="resource-page">
            <h1 className="h1">Resources</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options as needed */]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredResources.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
};

export default ResourcePage;
