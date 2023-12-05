import React from 'react';

const ContentTable = ({ data, onDeleteContent }) => {
    const columns = ['Title', 'Type', 'Actions'];

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
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.type}</td>
                        <td>
                            <button className="button" onClick={() => onDeleteContent(item._id, item.type)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContentTable;
