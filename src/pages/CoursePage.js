import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import CourseCard from '../components/cards/CourseCard';
import Filter from '../components/common/Filter';
import '../styles/components.css';

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses');
                console.log(response.data);
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error.message);
            }
        };

        fetchCourses();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className="course-page">
            <h1>Courses</h1>
            <Filter onChange={handleFilterChange} options={[{ value: '', label: 'All' }, /* Add more filter options as needed */]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
