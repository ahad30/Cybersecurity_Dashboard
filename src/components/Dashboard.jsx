// src/components/Dashboard.jsx
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
} from "@mui/material";
import StatusCard from "./StatusCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";


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

export default function Dashboard() {
  return (
     <>
     <div className="container mx-auto md:p-4">
 <Grid className="grid grid-cols-1 md:grid-cols-3 gap-3"  sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <StatusCard title="Active Threats" value="24" color="#ff6384" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatusCard title="Open Vulnerabilities" value="12" color="#36a2eb" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatusCard title="Incidents Today" value="5" color="#4bc0c0" />
        </Grid>
      </Grid>

      {/* Second Row: 2 Charts */}
      <Grid className="grid grid-cols-1 md:grid-cols-2 gap-5"   sx={{ mb: 3 }}>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Top Attack Sources
            </Typography>
            <PieChart data={attackSources} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Real-time Threat Activity
            </Typography>
            <LineChart data={threatData} />
          </Paper>
        </Grid>
      </Grid>

      {/* Third Row: Full-width Table */}
      <Grid className="">
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Security Alerts
            </Typography>
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
        </Grid>
      </Grid>

    </div>
   </>
  );
}