import { Card, CardContent, Typography } from "@mui/material";

export default function StatusCard({ title, value, color }) {
  return (
    <Card sx={{ bgcolor: color, color: "white" }}>
      <CardContent>
        <Typography variant="h5">{value}</Typography>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
    </Card>
  );
}