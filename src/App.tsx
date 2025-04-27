import React, { useState, useEffect } from 'react';
import './App.css';
import { Incident } from './types';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import FilterControls from './components/FilterControls';
import ThemeToggle from './components/ThemeToggle';

const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, leading to information bubble effects and unfair representation across user groups.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information during an emergency response simulation, which could have led to harmful actions if implemented in a real scenario.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata through response patterns, potentially revealing usage habits but not personally identifiable information.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  }
];

type SeverityFilter = "All" | "Low" | "Medium" | "High";
type SortOption = "newest" | "oldest";
type Theme = "light" | "dark";

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>("All");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleAddIncident = (newIncident: Omit<Incident, 'id' | 'reported_at'>) => {
    const incident: Incident = {
      ...newIncident,
      id: incidents.length > 0 ? Math.max(...incidents.map(inc => inc.id)) + 1 : 1,
      reported_at: new Date().toISOString()
    };
    setIncidents([...incidents, incident]);
  };

  const filteredIncidents = incidents
    .filter(incident => severityFilter === "All" || incident.severity === severityFilter)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOption === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">
          <h1>AI Safety Incident Dashboard</h1>
          <p>Monitor and report AI safety incidents at HumanChain</p>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      
      <main className="app-main">
        <section className="controls-section">
          <FilterControls 
            severityFilter={severityFilter}
            setSeverityFilter={setSeverityFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </section>
        
        <section className="incidents-section">
          <h2>Incidents</h2>
          <IncidentList incidents={filteredIncidents} />
        </section>
        
        <section className="form-section">
          <h2>Report New Incident</h2>
          <IncidentForm onAddIncident={handleAddIncident} />
        </section>
      </main>
      
      <footer className="app-footer">
        <p>© 2025 HumanChain - Building a safer AI future</p>
      </footer>
    </div>
  );
}

export default App;