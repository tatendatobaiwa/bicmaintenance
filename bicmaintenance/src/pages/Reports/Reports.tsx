import React, { useState } from 'react';
import { FiPlus, FiAlertTriangle, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';
import './Reports.css';

const Reports: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'open' | 'closed'>('open');
  const [newReport, setNewReport] = useState({
    roomNumber: '',
    faultType: '',
    priority: 'medium',
    description: '',
    images: [] as File[],
  });

  // Mock data
  const sampleReports = [
    {
      id: 1,
      room: 'A204',
      type: 'Plumbing',
      priority: 'high',
      status: 'Under Review',
      date: '2024-03-15',
      messages: 2,
    },
    {
      id: 2,
      room: 'B105',
      type: 'Electrical',
      priority: 'medium',
      status: 'Scheduled',
      date: '2024-03-14',
      messages: 1,
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setNewReport({ ...newReport, images: [...newReport.images, ...files] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log('Report submitted:', newReport);
  };

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>Fault Reports</h1>
        <button className="new-report-button">
          <FiPlus /> New Report
        </button>
      </div>

      <div className="reports-tabs">
        <button
          className={`tab ${activeTab === 'open' ? 'active' : ''}`}
          onClick={() => setActiveTab('open')}
        >
          <FiAlertTriangle /> Open Issues ({sampleReports.length})
        </button>
        <button
          className={`tab ${activeTab === 'closed' ? 'active' : ''}`}
          onClick={() => setActiveTab('closed')}
        >
          <FiCheckCircle /> Resolved Issues (0)
        </button>
      </div>

      {/* New Report Form */}
      <div className="report-form">
        <h2>Submit New Report</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Room Number</label>
              <input
                type="text"
                value={newReport.roomNumber}
                onChange={(e) => setNewReport({ ...newReport, roomNumber: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Fault Type</label>
              <select
                value={newReport.faultType}
                onChange={(e) => setNewReport({ ...newReport, faultType: e.target.value })}
                required
              >
                <option value="">Select type</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Structural">Structural</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                value={newReport.priority}
                onChange={(e) => setNewReport({ ...newReport, priority: e.target.value })}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={newReport.description}
              onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Images (max 3)</label>
            <div className="file-upload">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                disabled={newReport.images.length >= 3}
              />
              <div className="upload-preview">
                {newReport.images.map((file, index) => (
                  <div key={index} className="image-preview">
                    <img src={URL.createObjectURL(file)} alt={`Upload ${index}`} />
                    <button
                      onClick={() => setNewReport({
                        ...newReport,
                        images: newReport.images.filter((_, i) => i !== index)
                      })}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">Submit Report</button>
        </form>
      </div>

      {/* Reports List */}
      <div className="reports-list">
        {sampleReports.map((report) => (
          <div key={report.id} className={`report-card priority-${report.priority}`}>
            <div className="report-header">
              <span className="priority-badge">{report.priority}</span>
              <span className="room-number">{report.room}</span>
              <span className="fault-type">{report.type}</span>
              <button className="chat-button">
                <FiMessageSquare /> ({report.messages})
              </button>
            </div>
            <div className="report-details">
              <p>{report.status}</p>
              <span className="report-date">{report.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;