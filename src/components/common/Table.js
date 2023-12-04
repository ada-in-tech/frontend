import React from 'react';
import '../../styles/components.css';

const Table = ({ data, onRowClick }) => {
    const columns = ['User', 'Role', 'Description', 'Date Reported', 'Status', 'Actions'];

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
                {data.map((report, index) => {
                    const userName = report.user?.name || 'Unknown'; // Assuming the user object is populated
                    const userRole = report.user?.role || 'Unknown'; // Assuming the user object has a role
                    return (
                        <tr key={index}>
                            <td>{userName}</td>
                            <td>{userRole}</td>
                            <td>{report.description}</td>
                            <td>{new Date(report.dateReported).toLocaleDateString()}</td>
                            <td>{report.resolved ? 'Resolved' : 'Pending'}</td>
                            <td>
                                <button className="button" onClick={() => onRowClick(report)}>
                                    View Details
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default Table;
