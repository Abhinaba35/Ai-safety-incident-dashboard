import React from 'react';
import { Incident } from '../types';
import IncidentItem from './IncidentItem';

type IncidentListProps = {
  incidents: Incident[];
};

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  if (incidents.length === 0) {
    return <p className="no-incidents">No incidents found matching your filters.</p>;
  }
  
  return (
    <div className="incident-list">
      {incidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;