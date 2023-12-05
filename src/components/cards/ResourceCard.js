import React from 'react';

const ResourceCard = ({ resource }) => {

    return (
        <div className="resource-card">
            <img src={resource.image || 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/Graphic_design_resources_3_jpg_kjGz3g_s.jpg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces'} alt={resource.title} />
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <p>Type: {resource.type}</p>
            <p className="sharer-info">Sharer: {resource.sharer?.name || 'Unknown'}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="button">
                Visit Source
            </a>
        </div>
    );
};

export default ResourceCard;
