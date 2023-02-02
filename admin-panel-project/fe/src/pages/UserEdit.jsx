import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { FormGroup } from "@mui/material";

export default function UserEdit([users, setUsers]) {
  let data = useLocation();
  //   console.log("data", data.state.product);
  const URL = "http://localhost:8080/users";
  const [currentUser, setCurrentUser] = useState(data.state.user[0]);
  //   const [user, setProduct] = useState([]);

  function handleFirstName(e) {
    setCurrentUser({ ...currentUser, firstname: e.target.value });
  }
  function handleLastName(e) {
    setCurrentUser({ ...currentUser, lastname: e.target.value });
  }
  function handlePhoneNumber(e) {
    setCurrentUser({ ...currentUser, phonenumber: e.target.value });
  }
  function handleEmail(e) {
    setCurrentUser({ ...currentUser, email: e.target.value });
  }
  function handleRole(e) {
    setCurrentUser({ ...currentUser, rowradio: e.target.value });
  }
  function handleDisabled(e) {
    setCurrentUser({ ...currentUser, disabled: e.target.value });
  }
  function handleAvatar(e) {
    setCurrentUser({ ...currentUser, avatar: e.target.value });
  }
  function handlePassword(e) {
    setCurrentUser({ ...currentUser, password: e.target.value });
  }

  async function handleEdit() {
    const putData = {
      id: currentUser.id,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      phonenumber: currentUser.phonenumber,
      email: currentUser.email,
      rowradio: currentUser.rowradio,
      disabled: currentUser.disabled,
      password: currentUser.password,
      avatar: currentUser.avatar,
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
    setUsers(FETCHED_JSON.data);
  }

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <Typography variant="h4">Edit Products</Typography>
      <br />
      {currentUser && (
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              FirstName
            </Typography>
            <TextField
              type="text"
              name="firstname"
              defaultValue={currentUser.firstname}
              onChange={handleFirstName}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              LastName
            </Typography>
            <TextField
              type="text"
              name="lastname"
              defaultValue={currentUser.lastname}
              onChange={handleLastName}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Phonenumber
            </Typography>
            <TextField
              type="number"
              name="phonenumber"
              defaultValue={currentUser.phonenumber}
              onChange={handlePhoneNumber}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Email
            </Typography>
            <TextField
              type="email"
              name="email"
              defaultValue={currentUser.email}
              onChange={handleEmail}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Role
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="rowradio"
              defaultValue={currentUser.rowradio}
              onChange={handleRole}
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
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Disabled
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ width: "10px" }}
                name="disabled"
                defaultValue={currentUser.disabled}
                onChange={handleDisabled}
              />
            </FormGroup>
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Avatar
            </Typography>
            <TextField
              type="file"
              name="avatar"
              defaultValue={currentUser.avatar}
              onChange={handleAvatar}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Password
            </Typography>
            <TextField
              type="number"
              name="password"
              defaultValue={currentUser.password}
              onChange={handlePassword}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Button variant="outlined" onClick={handleEdit}>
            Save
          </Button>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <Button variant="outlined">Back</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
