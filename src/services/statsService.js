import axios from 'axios';

const API_BASE_URL = '/api';

export async function fetchMonthlyApplications() {
  const response = await axios.get(`${API_BASE_URL}/stats/monthly-applications`);
  return {
    labels: response.data.map(item => item.month),
    data: response.data.map(item => item.count)
  };
}

export async function fetchStartupsByIndustry() {
  const response = await axios.get(`${API_BASE_URL}/stats/startups-by-industry`);
  return {
    labels: response.data.map(item => item.industry),
    data: response.data.map(item => item.count)
  };
}

export async function exportDashboardData() {
  const [applications, industries] = await Promise.all([
    fetchMonthlyApplications(),
    fetchStartupsByIndustry()
  ]);
  
  return {
    monthlyApplications: applications,
    startupsByIndustry: industries
  };
} 