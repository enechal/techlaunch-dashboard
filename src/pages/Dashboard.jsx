import React, { useState, useEffect } from 'react';
import { fetchMonthlyApplications, fetchStartupsByIndustry } from '../services/statsService';
import { BarChart } from '../components/charts/BarChart';
import { PieChart } from '../components/charts/PieChart';
import { Spinner } from '../components/ui/Spinner';
import { exportToCSV } from '../utils/exportData';

export default function Dashboard() {
  const [applicationData, setApplicationData] = useState(null);
  const [industryData, setIndustryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [applications, industries] = await Promise.all([
          fetchMonthlyApplications(),
          fetchStartupsByIndustry()
        ]);
        setApplicationData(applications);
        setIndustryData(industries);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const handleExport = () => {
    if (applicationData && industryData) {
      exportToCSV({
        monthlyApplications: applicationData,
        startupsByIndustry: industryData
      });
    }
  };

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">TechLaunch Dashboard</h1>
        <button 
          onClick={handleExport}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Applications</h2>
          {applicationData && <BarChart data={applicationData} />}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Startups by Industry</h2>
          {industryData && <PieChart data={industryData} />}
        </div>
      </div>
    </div>
  );
} 