import { TextField, Box, MenuItem } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";

export default function NewProduct({ setProducts }) {
  const URL = "http://localhost:8080/ecommerce";

  const ColorButtonSave = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A700"],
    },
  }));
  const ColorButtonBack = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo["A400"],
    "&:hover": {
      backgroundColor: indigo["A200"],
    },
  }));

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      image: e.target.image.value,
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      price: e.target.price.value,
      discount: e.target.discount.value,
      description1: e.target.description1.value,
      description2: e.target.description2.value,
      code: e.target.code.value,
      hashtag: e.target.hashtag.value,
      technology: e.target.technology.value,
      rating: e.target.rating.value,
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
    setProducts(FETCHED_JSON.data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">New Product</Typography>
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Image</h3>
        <TextField
          id="outlined-image"
          sx={{ width: 300 }}
          name="image"
        ></TextField>
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Title</h3>
        <TextField
          id="outlined-title"
          type="text"
          sx={{ width: 600 }}
          name="title"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Subtitle</h3>
        <TextField
          id="outlined-subtitle"
          type="text"
          sx={{ width: 600 }}
          name="subtitle"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Price</h3>
        <TextField
          id="outlined-price"
          type="number"
          sx={{ width: 600 }}
          name="price"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Discount</h3>
        <TextField
          id="outlined-discount"
          type="number"
          sx={{ width: 600 }}
          name="discount"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Description 1</h3>
        <TextField
          id="outlined-description1"
          type="text"
          sx={{ width: 600 }}
          name="description1"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Description 2</h3>
        <TextField
          id="outlined-description2"
          type="text"
          sx={{ width: 600 }}
          name="description2"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Code</h3>
        <TextField
          id="outlined-code"
          type="number"
          sx={{ width: 600 }}
          name="code"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Hashtag</h3>
        <TextField
          id="outlined-hashtag"
          type="number"
          sx={{ width: 600 }}
          name="hashtag"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Technology</h3>
        <TextField
          id="outlined-technology"
          label="Add Tag"
          type="text"
          sx={{ width: 600 }}
          name="technology"
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }}>
        <h3 style={{ width: 300 }}>Rating</h3>
        <TextField
          id="outlined-rating"
          type="number"
          sx={{ width: 600 }}
          name="rating"
        />
      </Box>
      <br />
      <Box>
        <ColorButtonSave variant="outlined" sx={{ mx: 1 }} type="submit">
          Save
        </ColorButtonSave>
        <ColorButtonBack variant="outlined">Back</ColorButtonBack>
      </Box>
    </form>
  );
}
