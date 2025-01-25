import React, { useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import './Dashboard.css';
import CategoryPieChart from '../components/CategoryPieChart';
import SubscriptionList from '../components/SubscriptionList';

const Dashboard = () => {
  const { subscriptions } = useSubscriptions();

  const totalCost = subscriptions.reduce((sum, sub) => sum + sub.cost, 0);

  // State for holding summary data or metrics
  const [summary, setSummary] = useState({
    totalSubscriptions: subscriptions.length,
    totalSpending: totalCost,
  });

  // Placeholder data for recent activities
  const recentActivities = [
    { id: 1, action: 'Added Netflix subscription', date: '2025-01-20' },
    { id: 2, action: 'Updated Spotify subscription', date: '2025-01-18' },
    { id: 3, action: 'Canceled Amazon Prime subscription', date: '2025-01-15' },
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      {/* Summary Section */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Subscriptions</h3>
          <p>{summary.totalSubscriptions}</p>
        </div>
        <div className="summary-card">
          <h3>Total Spending</h3>
          <p>${summary.totalSpending}</p>
        </div>
      </div>

      {/* Subscription List Section */}
      <div className="dashboard-subscription-list">
        <h3>Subscriptions</h3>
        <SubscriptionList subscriptions={subscriptions} />
      </div>

      {/* Recent Activity Section */}
      <div className="dashboard-recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <span>{activity.action}</span>
              <span className="activity-date">{activity.date}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
