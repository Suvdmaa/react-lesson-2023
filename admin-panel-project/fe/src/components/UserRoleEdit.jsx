import { TextField, Typography, Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserRoleContext } from "../contexts/UserRoleContext";
import { Link } from "react-router-dom";

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
  return (
    <Box
      sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRaadius: 2 }}
    >
      <Typography valriant="h4">Edit User Role Name</Typography>
      <br />
      <TextField
        name="userRoleName"
        defaultValue={currentUserRole.user_role_name}
        onChange={handleUserName}
      />
      <Button valriant="outlined" onClick={handleEdit}>
        Save
      </Button>
      <Link to={"/user-roles"} style={{ textDecoration: "none" }}>
        <Button variant="outlined">Back</Button>
      </Link>
    </Box>
  );
}
