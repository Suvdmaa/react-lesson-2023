import * as React from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const dataListEcommerce = [
  { icon: <ArrowRightIcon />, label: "Product Manage" },
  { icon: <ArrowRightIcon />, label: "Product Grid" },
  { icon: <ArrowRightIcon />, label: "Product Page" },
];

const dataListUser = [
  { icon: <ArrowRightIcon />, label: "User List" },
  { icon: <ArrowRightIcon />, label: "User Add" },
  { icon: <ArrowRightIcon />, label: "User Edit" },
];

export default function SideBarCollapse({ open, setOpen }) {
  return (
    <Box>
      <ListItemButton alignItems="flex-start" onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Link to="/ecommerce">
          <ListItemText primary="E-commerce" />
        </Link>
        <KeyboardArrowDown />
      </ListItemButton>
      {open &&
        dataListEcommerce.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      <ListItemButton alignItems="flex-start" onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <Link to="/users">
          <ListItemText primary="User" />
        </Link>
        <KeyboardArrowDown />
      </ListItemButton>
      {open &&
        dataListUser.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
    </Box>
  );
}
