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

export default function NewUser() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-firstname" label="First Name" type="text" />
      <TextField id="outlined-lastname" label="Last Name" type="text" />
      <TextField id="outlined-number" label="Phone Number" type="number" />
      <TextField id="outlined-email" label="Email" type="number" />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          <FormControlLabel value="user" control={<Radio />} label="User" />
        </RadioGroup>
        <FormControlLabel
          value="disabled"
          control={<Checkbox />}
          label="Disabled"
          labelPlacement="top"
        />
      </FormControl>

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Stack spacing={2} direction="row">
        <Button variant="contained">Save</Button>
        <Button variant="outlined">Reset</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Box>
  );
}
