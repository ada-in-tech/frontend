import React from 'react';

const Table = ({ data, columns }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col, index) => <th key={index}>{col}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((col, colIndex) => <td key={colIndex}>{row[col.toLowerCase()]}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
