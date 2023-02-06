import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Ecommerce from "./pages/Ecommerce";
import NewUser from "./components/NewUser";
import * as React from "react";
import SideBar from "./components/Sidebar/Sidebar";
import NewProduct from "./components/NewProduct";
import { useState } from "react";
import ProductsEdit from "./pages/ProductsEdit";
import UserEdit from "./pages/UserEdit";
import {
  Switch,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
  Toolbar,
  AppBar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
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
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={isDarkTheme} onChange={changeTheme} />
                }
                label="Dark Theme"
              />
            </FormGroup>
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
              <Route
                path="/ecommerce/edit/:id"
                element={
                  <ProductsEdit products={products} setProducts={setProducts} />
                }
              />
              <Route
                path="/user/edit/:id"
                element={<UserEdit user={users} setUsers={setUsers} />}
              />
            </Routes>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
