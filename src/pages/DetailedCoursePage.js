import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useParams } from 'react-router-dom';
import '../styles/card.css';

const DetailedCoursePage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

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

    if (!course) return <div className="card">Course not found</div>;

    return (
        <div className="card">
            <h1 className="card-title">{course.title}</h1>
            <img src={course.imageUrl} alt={course.title} className="card-image" />
            <p className="card-body">{course.description}</p>
            <ul>
                {course.content.map((chapter, index) => (
                    <li key={index}>{chapter}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedCoursePage;
