import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function UsersTable({ users, setUsers }) {
  const URL = "http://localhost:8080/users";

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  const columns = [
    { field: "id", headerName: "ID", type: "number", width: 90 },
    {
      field: "firstname",
      headerName: "First name",
      type: "string",
      width: 180,
    },
    { field: "lastname", headerName: "Last name", type: "string", width: 180 },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      type: "number",
      width: 180,
    },
    { field: "email", headerName: "Email", type: "string", width: 200 },
    { field: "rowradio", headerName: "Role", type: "string", width: 100 },
    { field: "disabled", headerName: "Disabled", type: "boolean", width: 130 },
    { field: "avatar", headerName: "Avatar", type: "string", width: 130 },
    { field: "actions", headerName: "Actions", type: "string", width: 130 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box>
        <h1>Users</h1>
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
          <Link to="/user/new" style={{ textDecoration: "none" }}>
            <Button variant="contained">NEW</Button>
          </Link>
          <Button variant="contained">ADD FILTER</Button>
        </Box>
      </Box>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
