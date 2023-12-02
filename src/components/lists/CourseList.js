import React from 'react';
import Card from '../cards/Card';

const CourseList = ({ courses }) => {
    return (
        <div className="course-list">
            {courses.map(course => (
                <Card key={course.id} title={course.title} description={course.description} />
            ))}
        </div>
    );
};

export default CourseList;
