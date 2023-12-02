import React from 'react';

const Avatar = ({ user }) => {
    return (
        <div className="inline-block rounded-full overflow-hidden align-middle">
            <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 object-cover" />
        </div>
    );
};

export default Avatar;
