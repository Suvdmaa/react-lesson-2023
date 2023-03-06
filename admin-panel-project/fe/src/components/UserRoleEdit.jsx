import { TextField, Typography, Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserRoleContext } from "../contexts/UserRoleContext";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";

export default function UserRoleEdit() {
  const { userRole, setUserRole, URL } = useContext(UserRoleContext);
  let data = useLocation();
  const navigate = useNavigate();

  const [currentUserRole, setCurrentUserRole] = useState(
    data.state.userRoleName[0]
  );

  function handleUserName(e) {
    setCurrentUserRole({ ...currentUserRole, user_role_name: e.target.value });
  }

  async function handleEdit() {
    const putData = {
      id: currentUserRole.id,
      userRoleName: currentUserRole.user_role_name,
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserRole(FETCHED_JSON);
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
    <Box
      sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRaadius: 2 }}
    >
      <Typography variant="h4">Edit User Role Name</Typography>
      <br />
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6" style={{ width: 300 }}>
          User Role Name
        </Typography>
        <TextField
          name="userRoleName"
          variant="filled"
          sx={{ width: 600 }}
          defaultValue={currentUserRole.user_role_name}
          onChange={handleUserName}
        />
      </Box>
      <br />
      <ColorButtonSave valriant="outlined" onClick={handleEdit}>
        Save
      </ColorButtonSave>
      <Link to={"/user-roles"} style={{ textDecoration: "none" }}>
        <ColorButtonBack variant="outlined">Back</ColorButtonBack>
      </Link>
    </Box>
  );
}
