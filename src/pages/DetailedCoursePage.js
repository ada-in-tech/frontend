import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useParams } from 'react-router-dom';
import '../styles/card.css';

const DetailedCoursePage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({ content: [] }); // Initialize with default structure

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`/api/courses/${courseId}`);
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course details:', error.message);
            }
        };

        fetchCourse();
    }, [courseId]);

    const renderContent = () => {
        if (Array.isArray(course.content)) {
            return course.content.map((chapter, index) => (
                <li key={index}>{chapter}</li>
            ));
        } else if (typeof course.content === 'string') {
            // Example: If content is a string, split by a delimiter and map
            return course.content.split(',').map((chapter, index) => (
                <li key={index}>{chapter}</li>
            ));
        } else {
            return <li>Content format not supported</li>;
        }
    };

    // Optional: Loading state check
    if (!course) return <div className="card">Loading...</div>;

    return (
        <div className="card">
            <h1 className="card-title">{course.title}</h1>
            <img src={course.image} alt={course.title} className="card-image" />
            <p className="card-body">{course.description}</p>
            <ul>{renderContent()}</ul>
        </div>
    );
};

export default DetailedCoursePage;
