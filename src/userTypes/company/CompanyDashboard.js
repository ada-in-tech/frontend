import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import Card from '../../components/cards/Card';
import CompanyProfileCard from '../../components/cards/CompanyProfileCard';
import CommunityFeed from '../../components/common/CommunityFeed';
import '../../styles/components.css';

const CompanyDashboard = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [talentSearchResults, setTalentSearchResults] = useState([]);
    const [collaborationOpportunities, setCollaborationOpportunities] = useState([]);
    const [companyEvents, setCompanyEvents] = useState([]);
    const [companyProfile, setCompanyProfile] = useState(null);
    const [communityPosts, setCommunityPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobPostingsResponse = await axios.get('/api/jobpostings');
                setJobPostings(jobPostingsResponse.data);
                // Fetch other data similarly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <section className="job-postings">
                <h2 className="dashboard-title">Job Postings</h2>
                {jobPostings.map(job => (
                    <Card key={job.id} item={job} />
                ))}
            </section>
            <section className="talent-search">
                <h2 className="dashboard-title">Talent Search</h2>
                {talentSearchResults.map(profile => (
                    <Card key={profile.id} item={profile} />
                ))}
            </section>
            <section className="collaborations">
                <h2 className="dashboard-title">Collaboration Opportunities</h2>
                {collaborationOpportunities.map(opportunity => (
                    <Card key={opportunity.id} item={opportunity} />
                ))}
            </section>
            <section className="events">
                <h2 className="dashboard-title">Your Events</h2>
                {companyEvents.map(event => (
                    <Card key={event.id} item={event} />
                ))}
            </section>
            <section className="company-profile">
                <h2 className="dashboard-title">Company Profile</h2>
                {companyProfile && (
                    <CompanyProfileCard {...companyProfile} />
                )}
            </section>
            <section className="community-feed">
                <h2 className="text-2xl font-bold mb-4">Community Feed</h2>
                <CommunityFeed feeds={communityPosts} />
            </section>
        </div>
    );
};

export default CompanyDashboard;
