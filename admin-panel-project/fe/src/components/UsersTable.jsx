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
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL); // Response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ...}]}
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }
  console.log(users);

  const columns = [
    { field: "id", headerName: "ID", type: "number", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      type: "string",
      width: 150,
    },
    { field: "lastName", headerName: "Last name", type: "string", width: 150 },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      type: "number",
      width: 150,
    },
    { field: "email", headerName: "Email", type: "string", width: 130 },
    { field: "role", headerName: "Role", type: "string", width: 130 },
    { field: "disabled", headerName: "Disabled", type: "boolean", width: 130 },
    { field: "avatar", headerName: "Avatar", type: "string", width: 130 },
    { field: "actions", headerName: "Actions", type: "button", width: 130 },
  ];

  // const rows = users.map((user) => {
  //   return [
  //     {
  //       id: user.id,
  //       firstname: user.firstname,
  //       lastname: user.lastname,
  //       phonenumber: user.phonenumber,
  //       email: user.email,
  //       role: user.rowradio,
  //       disabled: user.disabled,
  //     },
  //   ];
  // });

  console.log(users);

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

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
      {users &&
        users.map((user) => {
          return <div>{user.firstname}</div>;
        })}
    </div>
  );
}
