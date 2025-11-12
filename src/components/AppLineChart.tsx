"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", activity: 20 },
  { name: "Feb", activity: 35 },
  { name: "Mar", activity: 50 },
  { name: "Apr", activity: 45 },
  { name: "May", activity: 60 },
  { name: "Jun", activity: 75 },
  { name: "Jul", activity: 90 },
];

const AppLineChart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="activity"
            stroke="#3b82f6"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppLineChart;
