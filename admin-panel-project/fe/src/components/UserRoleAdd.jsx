import { Typography, TextField, Box, Button } from "@mui/material";

export default function UserRoleAdd() {
  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <form>
        <Typography variant="h4">Add User Role</Typography>
        <TextField type="text" name="Role" />
        <br />
        <Button variant="outlined">Submit</Button>
        <br />
      </form>
    </Box>
  );
}
