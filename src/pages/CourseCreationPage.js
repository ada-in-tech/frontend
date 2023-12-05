import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const CourseCreationPage = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        content: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const courseWithInstructor = { ...courseData, instructor: userId };

        try {
            const response = await axios.post('/api/courses', courseWithInstructor);
            setCourseData({ title: '', description: '', content: '' });
            setSuccessMessage('Course created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating course:', error.message);
            setSuccessMessage('');
        }
    };


    const handleChange = (e) => {
        setCourseData({ ...courseData, [e.target.name]: e.target.value });
    };

    return (
        <div className="course-creation-container">
            <h2>Create a New Course</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form className="course-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Course Title</label>
                    <input type="text" name="title" value={courseData.title} onChange={handleChange} placeholder="Enter course title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea name="description" value={courseData.description} onChange={handleChange} placeholder="Enter course description"></textarea>
                </div>
                <div className="input-field">
                    <label>Course Content</label>
                    <textarea name="content" value={courseData.content} onChange={handleChange} placeholder="Outline the course content"></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Course</button>
                </div>
            </form>
        </div>
    );
};

export default CourseCreationPage;
