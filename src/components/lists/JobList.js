import React from 'react';
import Card from '../cards/Card';

const JobList = ({ jobs }) => {
    return (
        <div className="job-list">
            {jobs.map(job => (
                <Card key={job.id} title={job.title} description={job.description} />
            ))}
        </div>
    );
};

export default JobList;
