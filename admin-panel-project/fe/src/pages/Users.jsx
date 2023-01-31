import UsersTable from "../components/UsersTable";
import Box from "@mui/material/Box";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "../components/Sidebar";

export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              React Material Admin Full
            </Typography>
          </Toolbar>
        </AppBar>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <UsersTable />
        </Box>
      </Box>
    </div>
  );
}
