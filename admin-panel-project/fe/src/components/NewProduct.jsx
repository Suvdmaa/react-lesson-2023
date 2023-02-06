import { TextField, Box, MenuItem } from "@mui/material";
import { Button, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";
import { toast, ToastContainer } from "react-toastify";

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
    toast(`You saved product`);
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
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">New Product</Typography>
        <Box sx={{ display: "flex" }}>
          <h3 style={{ width: 300 }}>Image</h3>
          <TextField
            name={"image"}
            variant={"filled"}
            fullWidth={true}
            sx={{ width: 600 }}
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
            variant={"filled"}
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
            variant={"filled"}
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
            variant={"filled"}
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
            variant={"filled"}
          />
        </Box>
        <br />
        <Box sx={{ display: "flex" }}>
          <h3 style={{ width: 300 }}>Description 1</h3>
          <TextField
            id="outlined-description1"
            type="text"
            sx={{ width: 600 }}
            variant={"filled"}
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
            variant={"filled"}
          />
        </Box>
        <br />
        <Box sx={{ display: "flex" }}>
          <h3 style={{ width: 300 }}>Code</h3>
          <TextField
            id="outlined-code"
            type="number"
            sx={{ width: 600 }}
            variant={"filled"}
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
            variant={"filled"}
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
            variant={"filled"}
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
            variant={"filled"}
          />
        </Box>
        <br />
        <Box>
          <ColorButtonSave variant="outlined" sx={{ mx: 1 }} type="submit">
            Save
          </ColorButtonSave>

          <ColorButtonBack variant="outlined">Back</ColorButtonBack>
          <ToastContainer />
        </Box>
      </form>
    </Box>
  );
}
