import { FormLabel, TextField, Box, FormControl } from "@mui/material";

export default function NewProduct() {
  return (
    <Box>
      <FormControl>
        <FormLabel>Image</FormLabel>
        <TextField id="outlined-image" />
      </FormControl>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <TextField id="outlined-image" />
      </FormControl>
    </Box>
  );
}
