import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import SideBarMain from "./SideBarMain";
import SideBarTemplate from "./SideBarTemplate";

const drawerWidth = 240;

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <SideBarMain open={open} setOpen={setOpen} />
        <Divider />
        <SideBarTemplate />
      </Box>
    </Drawer>
  );
}
