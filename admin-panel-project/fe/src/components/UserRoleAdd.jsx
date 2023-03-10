import { Typography, TextField, Box, Button } from "@mui/material";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserRoleContext } from "../contexts/UserRoleContext";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function UserRoleAdd() {
  const { userRole, setUserRole, URL } = useContext(UserRoleContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserRole(FETCHED_JSON);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      userRoleName: e.target.roleName.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserRole(FETCHED_JSON.data);
    navigate("/user-roles");
  }

  const ColorButtonSave = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A700"],
    },
  }));
  const ColorButtonBack = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo["A400"],
    "&:hover": {
      backgroundColor: indigo["A200"],
    },
  }));

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Add User Role</Typography>
        <br />
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" style={{ width: 300 }}>
            User Role Name
          </Typography>
          <TextField name="roleName" label="Role name" variant="filled" />
        </Box>
        <br />
        <ColorButtonSave valriant="outlined" type="submit" sx={{ mx: 1 }}>
          Save
        </ColorButtonSave>
        <Link to={"/user-roles"} style={{ textDecoration: "none" }}>
          <ColorButtonBack variant="outlined">Back</ColorButtonBack>
        </Link>
        <br />
      </form>
    </Box>
  );
}
