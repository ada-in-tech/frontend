import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const CourseCreationPage = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        content: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/courses', courseData);
            console.log(response.data); // Handle success - maybe redirect or show success message
        } catch (error) {
            console.error('Error creating course:', error.message);
            // Optionally, handle errors, like showing error messages to the user
        }
    };

    const handleChange = (e) => {
        setCourseData({ ...courseData, [e.target.name]: e.target.value });
    };

    return (
        <div className="course-creation-container">
            <h2>Create a New Course</h2>
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
