# TechLaunch Dashboard

A reporting dashboard for the TechLaunch startup incubator that visualizes key metrics and allows data export.

## Metrics Implementation

### 1. Monthly Application Trends
- **Chart Type**: Bar Chart
- **Purpose**: Tracks the number of startup applications received each month
- **Implementation**: Uses Chart.js bar chart with custom styling and responsive design
- **Data Source**: `/api/stats/monthly-applications` endpoint

### 2. Startup Industry Distribution
- **Chart Type**: Pie Chart
- **Purpose**: Shows the distribution of accepted startups across different industry sectors
- **Implementation**: Uses Chart.js pie chart with custom color scheme
- **Data Source**: `/api/stats/startups-by-industry` endpoint

## Chart Library Configuration

The dashboard uses Chart.js through the react-chartjs-2 wrapper with the following key configurations:

- Responsive layouts that adapt to container size
- Custom color schemes for better visual hierarchy
- Proper data formatting and axis configuration
- Interactive tooltips and legends

## Data Export Implementation

The dashboard implements CSV export functionality that:
- Combines data from both charts into a single CSV file
- Includes proper headers and data formatting
- Uses native browser download capabilities
- Maintains data integrity during export

## Setup and Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technology Stack

- React + Vite
- Chart.js + react-chartjs-2
- Tailwind CSS for styling
- Axios for API calls 