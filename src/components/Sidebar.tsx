import React, { useState } from 'react';

type SidebarProps = {
  isOpen: boolean;
  severityFilter: "All" | "Low" | "Medium" | "High";
  setSeverityFilter: (filter: "All" | "Low" | "Medium" | "High") => void;
  sortOption: "newest" | "oldest";
  setSortOption: (option: "newest" | "oldest") => void;
  viewMode: "card" | "table" | "compact";
  setViewMode: (mode: "card" | "table" | "compact") => void;
  darkMode: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  severityFilter,
  setSeverityFilter,
  sortOption,
  setSortOption,
  darkMode
}) => {
  const [activeTab, setActiveTab] = useState<'filters' | 'stats'>('filters');
  
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'} ${darkMode ? 'dark' : 'light'}`}>
      <div className="sidebar-tabs">
        <button 
          className={`tab-btn ${activeTab === 'filters' ? 'active' : ''}`}
          onClick={() => setActiveTab('filters')}
        >
          <span className="material-icons">filter_list</span>
          <span className="tab-label">Filters</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          <span className="material-icons">bar_chart</span>
          <span className="tab-label">Stats</span>
        </button>
      </div>
      
      <div className="sidebar-content">
        {activeTab === 'filters' ? (
          <div className="filters-panel">
            <h3>Incident Filters</h3>
            
            <div className="filter-section">
              <h4>Severity</h4>
              <div className="severity-buttons">
                <button 
                  className={`severity-btn all ${severityFilter === 'All' ? 'active' : ''}`}
                  onClick={() => setSeverityFilter('All')}
                >
                  All
                </button>
                <button 
                  className={`severity-btn low ${severityFilter === 'Low' ? 'active' : ''}`}
                  onClick={() => setSeverityFilter('Low')}
                >
                  Low
                </button>
                <button 
                  className={`severity-btn medium ${severityFilter === 'Medium' ? 'active' : ''}`}
                  onClick={() => setSeverityFilter('Medium')}
                >
                  Medium
                </button>
                <button 
                  className={`severity-btn high ${severityFilter === 'High' ? 'active' : ''}`}
                  onClick={() => setSeverityFilter('High')}
                >
                  High
                </button>
              </div>
            </div>
            
            <div className="filter-section">
              <h4>Sort Order</h4>
              <div className="sort-controls">
                <div className="sort-slider">
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="1"
                    value={sortOption === 'newest' ? 0 : 1}
                    onChange={(e) => setSortOption(parseInt(e.target.value) === 0 ? 'newest' : 'oldest')}
                    className="slider"
                  />
                  <div className="slider-labels">
                    <span className={sortOption === 'newest' ? 'active' : ''}>Newest</span>
                    <span className={sortOption === 'oldest' ? 'active' : ''}>Oldest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="stats-panel">
            <h3>Incident Statistics</h3>
            <div className="stat-item">
              <span className="stat-label">Total Incidents</span>
              <span className="stat-value">5</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">High Severity</span>
              <span className="stat-value high">2</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Medium Severity</span>
              <span className="stat-value medium">2</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Low Severity</span>
              <span className="stat-value low">1</span>
            </div>
            
            <div className="chart-placeholder">
              <div className="bar-chart">
                <div className="chart-bar high" style={{ height: '40%' }}>
                  <span className="bar-label">High</span>
                </div>
                <div className="chart-bar medium" style={{ height: '40%' }}>
                  <span className="bar-label">Med</span>
                </div>
                <div className="chart-bar low" style={{ height: '20%' }}>
                  <span className="bar-label">Low</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;