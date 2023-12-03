import React, { useState } from 'react';
import axios from '../../services/api';
import '../../styles/components.css';

const ReportDetailsModal = ({ report, onClose, onAction }) => {
    const [actionNotes, setActionNotes] = useState('');
    const [actionTaken, setActionTaken] = useState('');

    const handleSubmit = async () => {
        // Call the onAction function passed from the AdminDashboard with the report ID and selected action
        await onAction(report._id, actionTaken, actionNotes);
        onClose(); // Close the modal after action is taken
    };

    return (
        <div className="report-details-modal">
            <div className="modal-content">
                <h2>Report Details</h2>
                <p><strong>User:</strong> {report.user.name}</p>
                <p><strong>Description:</strong> {report.description}</p>
                <p><strong>Date Reported:</strong> {new Date(report.dateReported).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {report.resolved ? 'Resolved' : 'Pending'}</p>

                <div className="action-section">
                    <textarea
                        placeholder="Action notes"
                        value={actionNotes}
                        onChange={(e) => setActionNotes(e.target.value)}
                    ></textarea>
                    <select value={actionTaken} onChange={(e) => setActionTaken(e.target.value)}>
                        <option value="">Select Action</option>
                        <option value="resolve">Resolve</option>
                        <option value="escalate">Escalate</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <button onClick={handleSubmit}>Update Report</button>
                <button onClick={onClose}>Close</button>
            </div>

            {/* This is an overlay that covers the whole screen and captures clicks outside the modal content to close the modal */}
            <div className="modal-overlay" onClick={onClose}></div>
        </div>
    );
};

export default ReportDetailsModal;
