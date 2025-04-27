import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import DashboardStatistics from "../Pages/Dashboard/Admin/Statistics/DashboardStatistics";




export const adminRoutes = [
  {
    path: "home",
    label: "Dashboard Statistics",
    element: <DashboardStatistics />,
    icon: <MdOutlineDashboardCustomize size={20}></MdOutlineDashboardCustomize>,
    permissionName: "view dashboard",
  },
  
];
