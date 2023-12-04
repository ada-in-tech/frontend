import React, { useState } from 'react';
import '../../styles/components.css';

const ReportDetailsModal = ({ report, onClose, onAction }) => {
    const [actionNotes, setActionNotes] = useState(report.adminReview?.notes || '');
    const [actionTaken, setActionTaken] = useState(report.resolved ? 'resolve' : '');

    const handleSubmit = async () => {
        await onAction(report._id, actionTaken, actionNotes);
        onClose();
    };

    return (
        <div className="report-details-modal">
            <div className="modal-content">
                <h2>Report Details</h2>
                <p><strong>User:</strong> {report.user.name}</p>
                <p><strong>Description:</strong> {report.description}</p>
                <p><strong>Date Reported:</strong> {new Date(report.dateReported).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {report.resolved ? 'Resolved' : 'Pending'}</p>
                {report.resolutionDetails && <p><strong>Resolution Details:</strong> {report.resolutionDetails}</p>}

                <div className="action-section">
                    <textarea
                        placeholder="Feedback notes"
                        value={actionNotes}
                        onChange={(e) => setActionNotes(e.target.value)}
                    ></textarea>
                    <select value={actionTaken} onChange={(e) => setActionTaken(e.target.value)}>
                        <option value="">Select Action</option>
                        <option value="resolve">Resolve</option>
                        <option value="unresolve">Unresolve</option>
                        <option value="escalate">Escalate</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="button-container">
                    <button className="button" onClick={handleSubmit}>Update Report</button>
                    <button className="button" onClick={onClose}>Close</button>
                </div>
            </div>
            <div className="modal-overlay" onClick={onClose}></div>
        </div>
    );
};

export default ReportDetailsModal;