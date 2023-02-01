import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@mui/material";
import SideBarCollapse from "./SideBarCollapse";

const dataMain = [
  {
    icon: <AccountCircleIcon />,
    label: (
      <Link style={{ textDecoration: "none", color: "black" }} to="/profile">
        Profile
      </Link>
    ),
  },
  {
    icon: <HomeIcon />,
    label: (
      <Link style={{ textDecoration: "none", color: "black" }} to="/dashboard">
        Dashboard
      </Link>
    ),
  },
];

export default function SideBarMain({ open, setOpen }) {
  return (
    <Box>
      <List>
        {dataMain.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <SideBarCollapse open={open} setOpen={setOpen} />
    </Box>
  );
}
