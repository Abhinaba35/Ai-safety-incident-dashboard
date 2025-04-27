import React, { useState } from 'react';
import { Incident } from '../types';

type IncidentFormProps = {
  onAddIncident: (incident: Omit<Incident, 'id' | 'reported_at'>) => void;
};

const IncidentForm: React.FC<IncidentFormProps> = ({ onAddIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<"Low" | "Medium" | "High">("Medium");
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!description.trim()) {
      setError('Description is required');
      return;
    }
    
    // Submit the new incident
    onAddIncident({
      title,
      description,
      severity
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setSeverity("Medium");
    setError('');
  };
  
  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Brief title of the incident"
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Detailed description of what happened"
          className="form-textarea"
          rows={4}
        />
      </div>
      
      <div className="form-group">
        <label>Severity:</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="severity"
              value="Low"
              checked={severity === "Low"}
              onChange={() => setSeverity("Low")}
            />
            Low
          </label>
          
          <label className="radio-label">
            <input
              type="radio"
              name="severity"
              value="Medium"
              checked={severity === "Medium"}
              onChange={() => setSeverity("Medium")}
            />
            Medium
          </label>
          
          <label className="radio-label">
            <input
              type="radio"
              name="severity"
              value="High"
              checked={severity === "High"}
              onChange={() => setSeverity("High")}
            />
            High
          </label>
        </div>
      </div>
      
      <button type="submit" className="submit-btn">Report Incident</button>
    </form>
  );
};

export default IncidentForm;