import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function NewUser({ users, setUsers }) {
  const URL = "http://localhost:8080/users";

  // useEffect(() => {
  //   fetchAllData();
  // }, []);

  // async function fetchAllData() {
  //   // fetch a data from localhost:8080/users
  //   const FETCHED_DATA = await fetch(URL); // Response
  //   const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ...}]}
  //   console.log(FETCHED_JSON);
  //   setUsers(FETCHED_JSON.data);
  // }
  // console.log(users);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.rowradio.value);

    const postData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phonenumber: e.target.phonenumber.value,
      email: e.target.email.value,
      rowradio: e.target.rowradio.value,
      disabled: e.target.disabled.value,
      password: e.target.password.value,
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
    setUsers(FETCHED_JSON.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-firstname"
          label="First Name"
          type="text"
          name="firstname"
          fullWidth={true}
        />
        <TextField
          id="outlined-lastname"
          label="Last Name"
          type="text"
          name="lastname"
          fullWidth={true}
        />
        <TextField
          id="outlined-number"
          label="Phone Number"
          type="number"
          name="phonenumber"
          fullWidth={true}
        />
        <TextField
          id="outlined-email"
          label="Email"
          type="email"
          name="email"
          fullWidth={true}
        />
        <FormControl sx={{ mx: 2 }}>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ display: "flex" }}
          >
            Role
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="rowradio"
          >
            <FormControlLabel
              value="admin"
              control={<Radio />}
              label="Admin"
              type="radio"
            />
            <FormControlLabel
              value="user"
              control={<Radio />}
              label="User"
              type="radio"
            />
          </RadioGroup>
          <FormControlLabel
            value="disabled"
            control={<Checkbox />}
            label="Disabled"
            labelPlacement="top"
            name="disabled"
            type="checkbox"
          />
        </FormControl>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          fullWidth={true}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button variant="outlined">Reset</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
        {users &&
          users.map((user) => {
            return <div>{user.firstname}</div>;
          })}
      </Box>
    </form>
  );
}
