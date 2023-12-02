import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import Card from '../../components/cards/Card';
import CommunityFeed from '../../components/common/CommunityFeed';
import '../../styles/components.css';

const NewcomerDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [communityFeeds, setCommunityFeeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesResponse = await axios.get('/api/courses');
                setCourses(coursesResponse.data);
                // Fetch jobs, mentors, and community feeds similarly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <section className="courses">
                <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {courses.map(course => (
                        <Card key={course.id} item={course} />
                    ))}
                </div>
            </section>
            <section className="job-listings">
                <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.map(job => (
                        <Card key={job.id} item={job} />
                    ))}
                </div>
            </section>
            <section className="mentors">
                <h2 className="text-2xl font-bold mb-4">Mentors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {mentors.map(mentor => (
                        <Card key={mentor.id} item={mentor} />
                    ))}
                </div>
            </section>
            <section className="community-feed">
                <h2 className="text-2xl font-bold mb-4">Community Feed</h2>
                <CommunityFeed feeds={communityFeeds} />
            </section>
        </div>
    );
};

export default NewcomerDashboard;
