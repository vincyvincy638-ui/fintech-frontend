import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Pie chart colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PortfolioChart = ({ stocks }) => {
  // Pie chart data format
  const pieData = stocks.map((stock) => ({
    name: stock.symbol,
    value: stock.value,
  }));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
      {/* Bar Chart */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h3>📊 Bar Chart - Stock Values</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stocks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="symbol" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h3>🥧 Pie Chart - Portfolio Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;
