import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Ecommerce from "./pages/Ecommerce";
import NewUser from "./components/NewUser";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import SideBar from "./components/Sidebar/Sidebar";
import NewProduct from "./components/NewProduct";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
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
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <Routes>
            <Route
              path="/users"
              element={<Users users={users} setUsers={setUsers} />}
            />
            <Route
              path="/ecommerce"
              element={
                <Ecommerce products={products} setProducts={setProducts} />
              }
            />
            <Route
              path="/user/new"
              element={<NewUser users={users} setUsers={setUsers} />}
            />
            <Route
              path="/ecommerce/new"
              element={
                <NewProduct products={products} setProducts={setProducts} />
              }
            />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
