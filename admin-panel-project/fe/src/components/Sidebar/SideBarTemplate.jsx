import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import BorderAllIcon from "@mui/icons-material/BorderAll";

const dataTemplate = [
  { icon: <AppsIcon />, label: "Core" },
  { icon: <MailIcon />, label: "Tables" },
  { icon: <BorderAllIcon />, label: "UI Elements" },
  { icon: <DescriptionIcon />, label: "Forms" },
];

export default function SideBarTemplate() {
  return (
    <List>
      <ListItemText primary="TEMPLATE" sx={{ display: "flex", p: 2 }} />
      {dataTemplate.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
