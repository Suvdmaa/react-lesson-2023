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
import { FormGroup } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const { users, setUsers, URL } = useContext(UserContext);
  const navigate = useNavigate();
  toast("You added New User");
  async function handleSubmit(e) {
    e.preventDefault();
    navigate("/users");
    console.log(e.target.disabled.value);
    const postData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phonenumber: e.target.phonenumber.value,
      email: e.target.email.value,
      rowradio: e.target.rowradio.value,
      disabled: e.target.disabled.value,
      password: e.target.password.value,
      avatar: e.target.avatar.value,
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
  console.log(users);

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <h1>Add Users</h1>
        <Box
          sx={{ "& .MuiTextField-root": { m: 1 } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-firstname"
            label="First Name"
            type="text"
            name="firstname"
            fullWidth
          />
          <TextField
            id="outlined-lastname"
            label="Last Name"
            type="text"
            name="lastname"
            fullWidth
          />
          <TextField
            id="outlined-number"
            label="Phone Number"
            type="number"
            name="phonenumber"
            fullWidth
          />
          <TextField
            id="outlined-email"
            label="Email"
            type="email"
            name="email"
            fullWidth
          />
          <FormControl sx={{ m: 2, display: "block" }}>
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
          </FormControl>
          <Box sx={{ m: 2 }}>
            <FormLabel id="demo-radio-buttons-group-label">Disabled</FormLabel>
            <br />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ width: "10px" }}
                name="disabled"
              />
            </FormGroup>
          </Box>
          <Box sx={{ mx: 1, my: 2 }}>
            <h4>Avatar</h4>
            <Button variant="contained" component="label">
              Upload an image
              <input hidden multiple type="file" name="avatar" />
            </Button>
          </Box>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            fullWidth={true}
          />
          <Stack spacing={2} direction="row" sx={{ my: 2, mx: 1 }}>
            <Button variant="contained" type="submit">
              Save
              <ToastContainer />
            </Button>
            <Button variant="outlined">Reset</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
}
