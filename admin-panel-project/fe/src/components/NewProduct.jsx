import { TextField, Box, MenuItem } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { useContext } from "react";
import { addProducts } from "../services/axiosProductsSerces";
import { Link } from "react-router-dom";

export default function NewProduct() {
  const { products, setProducts, URL } = useContext(ProductsContext);
  const navigate = useNavigate();

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
    toast(`You saved product`);
    navigate("/products");
    addProducts(e, setProducts, URL);
  }
  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">New Product</Typography>
        <Box sx={{ display: "flex" }}>
          <h3 style={{ width: 300 }}>Image</h3>
          <TextField
            name="image_path"
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
            name="product_name"
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
            name="product_price"
            variant={"filled"}
          />
        </Box>
        <br />
        <Box sx={{ display: "flex" }}>
          <h3 style={{ width: 300 }}>Quantity</h3>
          <TextField
            id="outlined-price"
            type="number"
            sx={{ width: 600 }}
            name="product_quantity"
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
          <h3 style={{ width: 300 }}>Description </h3>
          <TextField
            id="outlined-description1"
            type="text"
            sx={{ width: 600 }}
            variant={"filled"}
            name="product_description"
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
        <Box sx={{ display: "flex" }}>
          <h3 style={{ width: 300 }}>Category ID</h3>
          <TextField
            id="outlined-rating"
            type="number"
            sx={{ width: 600 }}
            name="product_category_id"
            variant={"filled"}
          />
        </Box>
        <br />
        <Box>
          <ColorButtonSave variant="outlined" sx={{ mx: 1 }} type="submit">
            Save
          </ColorButtonSave>
          <Link to={"/products"}>
            <ColorButtonBack variant="outlined">Back</ColorButtonBack>
          </Link>
          <ToastContainer />
        </Box>
      </form>
    </Box>
  );
}
