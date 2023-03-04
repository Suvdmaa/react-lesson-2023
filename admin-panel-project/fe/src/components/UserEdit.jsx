import { useLocation, Link } from "react-router-dom";
import { useState, useContext } from "react";
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
import { UserContext } from "../contexts/UserContext";
import { FormGroup } from "@mui/material";

export default function UserEdit() {
  const { users, setUsers, URL } = useContext(UserContext);
  let data = useLocation();
  //   console.log("data", data.state.product);
  const [currentUser, setCurrentUser] = useState(data.state.user[0]);
  //   const [user, setProduct] = useState([]);

  function handleFirstName(e) {
    setCurrentUser({ ...currentUser, first_name: e.target.value });
  }
  function handleLastName(e) {
    setCurrentUser({ ...currentUser, last_name: e.target.value });
  }
  function handlePhoneNumber(e) {
    setCurrentUser({ ...currentUser, phone_number: e.target.value });
  }
  function handleEmail(e) {
    setCurrentUser({ ...currentUser, email: e.target.value });
  }
  function handleRole(e) {
    setCurrentUser({ ...currentUser, rowradio: e.target.value });
  }
  function handleBirthData(e) {
    setCurrentUser({ ...currentUser, birth_date: e.target.value });
  }
  function handleAddress(e) {
    setCurrentUser({ ...currentUser, address: e.target.value });
  }
  function handleUserRoleId(e) {
    setCurrentUser({ ...currentUser, user_role_idd: e.target.value });
  }
  function handleAvatar(e) {
    setCurrentUser({ ...currentUser, avatar: e.target.value });
  }
  function handlePassword(e) {
    setCurrentUser({ ...currentUser, password: e.target.value });
  }

  console.log(currentUser);
  async function handleEdit() {
    const putData = {
      id: currentUser.id,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      birth_date: currentUser.birth_date,
      email: currentUser.email,
      phone_number: currentUser.phone_number,
      address: currentUser.address,
      user_role_id: currentUser.user_role_id,
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
    setUsers(FETCHED_JSON);
  }

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <Typography variant="h4">Edit Users</Typography>
      <br />
      {currentUser && (
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              FirstName
            </Typography>
            <TextField
              type="text"
              name="first_name"
              defaultValue={currentUser.first_name}
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
              name="last_name"
              defaultValue={currentUser.last_name}
              onChange={handleLastName}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Birth Date
            </Typography>
            <TextField
              name="birth_date"
              defaultValue={currentUser.birth_date}
              onChange={handleBirthData}
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
              Phonenumber
            </Typography>
            <TextField
              type="number"
              name="phone_number"
              defaultValue={currentUser.phone_number}
              onChange={handlePhoneNumber}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Address
            </Typography>
            <TextField
              name="address"
              defaultValue={currentUser.address}
              onChange={handleAddress}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              User Role Id
            </Typography>
            <TextField
              type="number"
              name="user_role_id"
              defaultValue={currentUser.user_role_id}
              onChange={handleUserRoleId}
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
          {/* <Box sx={{ display: "flex" }}>
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
          <br /> */}
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
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <Button variant="outlined" onClick={handleEdit}>
              Save
            </Button>
          </Link>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <Button variant="outlined">Back</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
