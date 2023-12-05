import React from 'react';

const CampaignCard = ({ campaign }) => {

    return (
        <div className="resource-card">
            <img src={campaign.image || 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/10/shutterstock-design-awareness-just-cause-cover.jpg'} alt={campaign.title} />
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p className="sharer-info">Organized By: {campaign.createdBy?.name || 'Unknown'}</p>
            <a href={campaign.link} target="_blank" rel="noopener noreferrer" className="button">
                Learn More
            </a>
        </div>
    );
};

export default CampaignCard;
