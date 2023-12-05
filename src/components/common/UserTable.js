import React from 'react';
import '../../styles/components.css';

const UserTable = ({ data, onDeleteUser }) => {
    const columns = ['Name', 'Email', 'Role', 'Actions'];

    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button className="button" onClick={() => onDeleteUser(user._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
