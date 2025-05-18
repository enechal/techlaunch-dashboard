export function exportToCSV(data) {
  // Convert data to CSV format
  const monthlyApplicationsCSV = [
    ['Month', 'Number of Applications'],
    ...data.monthlyApplications.labels.map((month, index) => [
      month,
      data.monthlyApplications.data[index]
    ])
  ];

  const industryDistributionCSV = [
    ['Industry', 'Number of Startups'],
    ...data.startupsByIndustry.labels.map((industry, index) => [
      industry,
      data.startupsByIndustry.data[index]
    ])
  ];

  // Combine both datasets with a separator
  const csvContent = [
    'Monthly Applications',
    ...monthlyApplicationsCSV.map(row => row.join(',')),
    '',
    'Industry Distribution',
    ...industryDistributionCSV.map(row => row.join(','))
  ].join('\n');

  // Create and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'techlaunch_dashboard_data.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
} 