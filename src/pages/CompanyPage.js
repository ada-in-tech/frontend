import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Card from '../components/cards/Card';
import '../styles/components.css';

const CompanyPage = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('/api/companies');
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error.message);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <div className="company-page">
            <h1>Companies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companies.map(company => (
                    <Card key={company.id} item={company} className="company-card" />
                ))}
            </div>
        </div>
    );
};

export default CompanyPage;
