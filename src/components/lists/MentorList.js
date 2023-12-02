import React from 'react';
import Card from '../cards/Card';

const MentorList = ({ mentors }) => {
    return (
        <div className="mentor-list">
            {mentors.map(mentor => (
                <Card key={mentor.id} title={mentor.name} description={mentor.specialization} />
            ))}
        </div>
    );
};

export default MentorList;
