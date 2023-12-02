import React from 'react';
import '../../styles/components.css';
import Avatar from './Avatar';

const CommunityFeed = ({ feeds }) => {

    if (!feeds) {
        // Return null or a placeholder if feeds is not provided
        return <div>Loading...</div>;
    }

    // Add a check to ensure feeds is defined and is an array
    if (!feeds || !Array.isArray(feeds)) {
        return <div>No feed data available.</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {feeds.map(feed => (
                <div key={feed.id} className="feed-post p-4 rounded-lg shadow mb-4">
                    <div className="flex items-center mb-2">
                        <Avatar user={feed.user} />
                        <div className="ml-2">
                            <div className="font-medium text-gray-800">{feed.user.name}</div>
                            <div className="text-xs text-gray-400">{feed.timestamp}</div>
                        </div>
                    </div>
                    <div className="text-gray-600">{feed.postContent}</div>
                    <div className="mt-2">
                        <button className="text-blue-500 hover:text-blue-700">Like</button>
                        <button className="text-blue-500 hover:text-blue-700 ml-2">Comment</button>
                        <button className="text-blue-500 hover:text-blue-700 ml-2">Share</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommunityFeed;
