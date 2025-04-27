# AI Safety Incident Dashboard

This project is a frontend React application for monitoring and reporting AI safety incidents at HumanChain. The dashboard allows users to view, filter, and report incidents related to AI safety concerns.

## Features

- Display AI safety incidents with Title, Severity, and Reported Date
- Filter incidents by severity level (All, Low, Medium, High)
- Sort incidents by date (Newest First, Oldest First)
- Toggle incident details view to see full descriptions
- Report new incidents with validation
- Dark/Light theme toggle with system preference detection
- Responsive design for various screen sizes

## Tech Stack

- React 18
- TypeScript
- CSS for styling (with CSS variables for theming)

## Project Structure

```
ai-safety-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── FilterControls.tsx
│   │   ├── IncidentForm.tsx
│   │   ├── IncidentItem.tsx
│   │   ├── IncidentList.tsx
│   │   └── ThemeToggle.tsx
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── types.ts
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Abhinaba35/Ai-safety-incident-dashboard
   cd ai-safety-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- **View Incidents**: The dashboard displays all reported incidents by default.
- **Filter Incidents**: Use the dropdown at the top to filter by severity level.
- **Sort Incidents**: Choose between "Newest First" or "Oldest First" from the sort dropdown.
- **View Details**: Click the "View Details" button on any incident to see its full description.
- **Report New Incident**: Fill out the form at the bottom of the page to report a new incident.
- **Toggle Theme**: Click the sun/moon icon in the header to switch between light and dark themes.

## Design Decisions

### State Management
All state is managed using React's built-in useState hooks. For a larger application, Context API or Redux might be considered for more complex state management needs.

### Component Structure
Components are modular and focused on single responsibilities:
- `FilterControls`: Handles filtering and sorting UI
- `IncidentList`: Displays the list of incidents
- `IncidentItem`: Individual incident display with toggle functionality
- `IncidentForm`: Form for reporting new incidents
- `ThemeToggle`: Handles theme switching

### Theming
A CSS variables approach was used for theming, allowing for easy switching between light and dark modes. The selected theme is stored in localStorage to persist between sessions.

### Responsive Design
The application uses Flexbox and CSS Grid to ensure a responsive layout across different screen sizes. Media queries handle specific layout adjustments for smaller screens.

## Future Enhancements

- Add incident editing capability
- Implement incident deletion
- Add advanced filtering options (date range, keyword search)
- Add user authentication
- Persist data to a backend service
- Add data visualization for incident trends
- Add pagination for large incident lists

## Testing

Run the test suite with:
```
npm test
```

## License

[MIT License](LICENSE)
