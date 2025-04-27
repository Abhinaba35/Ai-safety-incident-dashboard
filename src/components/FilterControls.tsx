import React from 'react';

type FilterControlsProps = {
  severityFilter: "All" | "Low" | "Medium" | "High";
  setSeverityFilter: (filter: "All" | "Low" | "Medium" | "High") => void;
  sortOption: "newest" | "oldest";
  setSortOption: (option: "newest" | "oldest") => void;
};

const FilterControls: React.FC<FilterControlsProps> = ({
  severityFilter,
  setSeverityFilter,
  sortOption,
  setSortOption
}) => {
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <label htmlFor="severity-filter">Filter by Severity:</label>
        <select 
          id="severity-filter"
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as any)}
          className="filter-select"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="sort-option">Sort by Date:</label>
        <select 
          id="sort-option"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as any)}
          className="filter-select"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;