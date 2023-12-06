import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import CampaignCard from '../components/cards/CampaignCard';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const CampaignPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchCampaigns = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/campaigns', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setCampaigns(response.data);
            } catch (error) {
                console.error('Error fetching campaigns:', error.message);
            }
        };

        fetchCampaigns();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredCampaigns = campaigns.filter(campaign =>
        campaign.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="Campaign-page">
            <h1 className="h1">Campaigns</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options as needed */]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCampaigns.map(campaign => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default CampaignPage;
