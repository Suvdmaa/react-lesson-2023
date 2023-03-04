import { Typography, TextField, Box, Button } from "@mui/material";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserRoleContext } from "../contexts/UserRoleContext";

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

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Add User Role</Typography>
        <TextField name="roleName" label="Role name" variant="outlined" />
        <br />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
        <br />
      </form>
    </Box>
  );
}
