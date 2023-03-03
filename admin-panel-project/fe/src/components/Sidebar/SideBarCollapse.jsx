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
  {
    icon: <ArrowRightIcon />,
    label: (
      <Link to="/users" style={{ textDecoration: "none", color: "orange" }}>
        User List
      </Link>
    ),
  },
  {
    icon: <ArrowRightIcon />,
    label: (
      <Link to="/user/new" style={{ textDecoration: "none", color: "orange" }}>
        User Add
      </Link>
    ),
  },
  { icon: <ArrowRightIcon />, label: "User Edit" },
  {
    icon: <ArrowRightIcon />,
    label: (
      <Link to="/user-role" style={{ textDecoration: "none", color: "orange" }}>
        User Role
      </Link>
    ),
  },
];

export default function SideBarCollapse({ open, setOpen }) {
  const [openUser, setOpenUser] = React.useState(false);
  return (
    <Box>
      <ListItemButton alignItems="flex-start" onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Link
          to="/ecommerce"
          style={{ textDecoration: "none", color: "#1493ff " }}
        >
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
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpenUser(!openUser)}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <Link to="/users" style={{ textDecoration: "none", color: "#1493ff" }}>
          <ListItemText primary="User" />
        </Link>
        <KeyboardArrowDown />
      </ListItemButton>
      {openUser &&
        dataListUser.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
    </Box>
  );
}
