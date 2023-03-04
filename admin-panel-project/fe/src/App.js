import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Ecommerce from "./pages/Ecommerce";
import NewUser from "./components/NewUser";
import * as React from "react";
import SideBar from "./components/Sidebar/Sidebar";
import NewProduct from "./components/NewProduct";
import { useState } from "react";
import ProductsEdit from "./components/ProductsEdit";
import UserEdit from "./components/UserEdit";
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
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { UserContextProvider } from "./contexts/UserContext";
import UserRole from "./pages/UserRoleTable";
import UserRoleAdd from "./components/UserRoleAdd";
import { UserRoleContextProvider } from "./contexts/UserRoleContext";
import UserRoleEdit from "./components/UserRoleEdit";

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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <ProductsContextProvider>
        <UserContextProvider>
          <UserRoleContextProvider>
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
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Ecommerce />} />
                    <Route path="/user/new" element={<NewUser />} />
                    <Route path="/product/new" element={<NewProduct />} />
                    <Route
                      path="/product/edit/:id"
                      element={<ProductsEdit />}
                    />
                    <Route path="/user/edit/:id" element={<UserEdit />} />
                    <Route path="/user-roles" element={<UserRole />} />
                    <Route path="/user-role/add" element={<UserRoleAdd />} />
                    <Route
                      path="/user-role/edit/:id"
                      element={<UserRoleEdit />}
                    />
                  </Routes>
                </Box>
              </Box>
            </div>
          </UserRoleContextProvider>
        </UserContextProvider>
      </ProductsContextProvider>
    </ThemeProvider>
  );
}

export default App;
