
import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from "@mui/material";
import StatusCard from "../../../../components/Dashboard/StatusCard";
import LineChart from "../../../../components/Dashboard/LineChart";
import PieChart from "../../../../components/Dashboard/PieChart";


const threatData = {
  labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
  datasets: [
    {
      label: "Threat Attempts",
      data: [12, 19, 3, 5, 2, 3, 15, 8],
      borderColor: "#ff6384",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const attackSources = {
  labels: ["Phishing", "Malware", "DDoS", "Brute Force", "Insider Threat"],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
      ],
    },
  ],
};

const alerts = [
  { id: 1, severity: "High", source: "Phishing", time: "10:30 AM" },
  { id: 2, severity: "Medium", source: "Malware", time: "11:45 AM" },
  { id: 3, severity: "Low", source: "Brute Force", time: "12:15 PM" },
  { id: 4, severity: "High", source: "DDoS", time: "01:20 PM" },
];

// src/components/Dashboard.jsx
export default function DashboardStatistics() {
  return (
    <>
<div className="lg:max-w-6xl p-4 mx-auto">
        {/* Status Cards Section */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 3, mb: 3 }}>
        <StatusCard title="Active Threats" value="24" color="#ff6384" />
        <StatusCard title="Open Vulnerabilities" value="12" color="#36a2eb" />
        <StatusCard title="Incidents Today" value="5" color="#4bc0c0" />
      </Box>

      {/* Charts Section */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '2fr 1fr' }, gap: 3, mb: 3 }}>
        <Paper sx={{ p: 2 }}
        >
          <Typography variant="h6" gutterBottom>Real-time Threat Activity</Typography>
          <LineChart data={threatData} />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Top Attack Sources</Typography>
          <PieChart data={attackSources} />
        </Paper>
      </Box>

      {/* Table Section */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Recent Security Alerts</Typography>
        <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {alerts.map((alert) => (
                    <TableRow key={alert.id}>
                      <TableCell>{alert.id}</TableCell>
                      <TableCell sx={{ 
                        color: alert.severity === "High" 
                          ? "red" 
                          : alert.severity === "Medium" 
                          ? "orange" 
                          : "green" 
                      }}>
                        {alert.severity}
                      </TableCell>
                      <TableCell>{alert.source}</TableCell>
                      <TableCell>{alert.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </Paper>
</div>
    </>
  );
}