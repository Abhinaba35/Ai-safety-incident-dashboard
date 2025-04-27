import React, { useState } from 'react';
import { Incident } from '../types';

type IncidentItemProps = {
  incident: Incident;
};

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const getSeverityClass = (severity: string) => {
    return `severity-tag severity-${severity.toLowerCase()}`;
  };
  
  return (
    <div className="incident-item">
      <div className="incident-header">
        <h3 className="incident-title">{incident.title}</h3>
        <span className={getSeverityClass(incident.severity)}>{incident.severity}</span>
      </div>
      
      <div className="incident-meta">
        <span className="incident-date">Reported: {formatDate(incident.reported_at)}</span>
      </div>
      
      <button 
        className="details-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      
      {isExpanded && (
        <div className="incident-details">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;