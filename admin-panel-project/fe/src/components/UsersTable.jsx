import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function UsersTable() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    role: "",
    disabled: "",
    avatar: "",
    actions: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  const columns = [
    { field: "id", headerName: "ID", type: "number", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      type: "string",
      width: 230,
    },
    { field: "lastName", headerName: "Last name", type: "string", width: 230 },
    { field: "phone", headerName: "Phone Number", type: "number", width: 230 },
    { field: "email", headerName: "Email", type: "email", width: 230 },
    { field: "role", headerName: "Role", type: "string", width: 130 },
    { field: "disabled", headerName: "Disabled", type: "boolean", width: 130 },
    { field: "avatar", headerName: "Avatar", type: "string", width: 130 },
    { field: "actions", headerName: "Actions", type: "string", width: 130 },
  ];

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL); // Response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ...}]}
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleOpenNewFile(userId) {
    console.log(userId);
    setIsUpdate(true);

    const filteredUser = users.filter((user) => user.id === userId)[0]; // filter ni dandaa array butsaadag neg bol gants esvel olon
    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        firstname: filteredUser.firstname,
        lastname: filteredUser.lastname,
        phone: filteredUser.phone,
        email: filteredUser.email,
        role: filteredUser.role,
        disabled: filteredUser.disabled,
        avatar: filteredUser.avatar,
        actions: filteredUser.actions,
      });
    }
  }

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box>
        <h1>Users</h1>
        {/* {users &&
          users.map((user) => {
            return (
              <Box sx={{ display: "flex" }}>
                <Button
                  variant="contained"
                  onClick={() => handleOpenNewFile(user.id)}
                >
                  NEW
                </Button>
                <Button variant="contained">ADD FILTER</Button>
              </Box>
            );
          })} */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/newuser">
            <Button variant="contained" onClick={() => handleOpenNewFile()}>
              NEW
            </Button>
          </Link>
          <Button variant="contained">ADD FILTER</Button>
        </Box>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
