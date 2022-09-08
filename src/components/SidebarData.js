import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Appointment request",
    icon: <AssignmentIcon />,
    link: "/appointment-request",
  },
  {
    title: "Tables",
    icon: <BarChartIcon />,
    link: "/tables",
  },
  {
    title: "Articles",
    icon: <DashboardIcon />,
    link: "/articles",
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    link: "/profile",
  },
  {
    title: "Log out",
    icon: <LockIcon />,
    link: "/logout",
  },
];
