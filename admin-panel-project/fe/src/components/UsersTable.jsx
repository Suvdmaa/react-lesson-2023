import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, pink, purple } from "@mui/material/colors";

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

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A700"],
    },
  }));

  const ColorButtonDelete = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: pink["A200"],
    "&:hover": {
      backgroundColor: pink["A400"],
    },
  }));
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
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        // console.log(params);
        return (
          <Box>
            <Avatar src={params.value} />
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <Box>
            <Stack direction="row" spacing={3}>
              <Link
                to={`/user/edit/${params.row.id}`}
                state={{
                  user: users.filter((p) => p.id === params.row.id),
                }}
                style={{ textDecoration: "none" }}
              >
                <ColorButton variant="contained" color="success">
                  Edit
                </ColorButton>
              </Link>
              <ColorButtonDelete
                variant="contained"
                color="error"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </ColorButtonDelete>
            </Stack>
          </Box>
        );
      },
    },
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
