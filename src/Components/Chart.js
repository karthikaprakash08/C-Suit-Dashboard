// src/components/Chart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Chart = ({ data }) => {
  const isPieChart = data.hasOwnProperty('completed');

  return (
    <div className="chart">
      {isPieChart ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: 'Completed', value: data.completed },
                { name: 'In Progress', value: data.inProgress },
                { name: 'Not Started', value: data.notStarted },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              <Cell key="completed" fill="#82ca9d" />
              <Cell key="inProgress" fill="#8884d8" />
              <Cell key="notStarted" fill="#FFBB28" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={Object.entries(data).map(([key, value]) => ({ name: key, value }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8949FF" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
