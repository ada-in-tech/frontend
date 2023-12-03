import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import '../styles/components.css';

const CommunityPage = () => {
    const [communityGroups, setCommunityGroups] = useState([]);

    useEffect(() => {
        const fetchCommunityGroups = async () => {
            try {
                const response = await axios.get('/api/communitygroups');
                setCommunityGroups(response.data);
            } catch (error) {
                console.error('Error fetching community groups:', error.message);
                console.log(error.response);
            }
        };

        fetchCommunityGroups();
    }, []);

    return (
        <div className="community-page">
            <h1>Community Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {communityGroups.map(group => (
                    <Card key={group._id} item={group} className="community-card" />
                ))}
            </div>
        </div>
    );
};

export default CommunityPage;
