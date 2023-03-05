import { useLocation, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { ProductsContext } from "../contexts/ProductsContext";
import { editProducts } from "../services/axiosProductsSerces";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";

export default function ProductsEdit() {
  let data = useLocation();
  const { products, setProducts, URL } = useContext(ProductsContext);
  const navigate = useNavigate();
  //   console.log("data", data.state.product);
  const [currentProduct, setCurrentProduct] = useState(data.state.product[0]);

  function handleImage(e) {
    setCurrentProduct({ ...currentProduct, image_path: e.target.value });
  }
  function handleTitle(e) {
    setCurrentProduct({ ...currentProduct, product_name: e.target.value });
  }
  function handlePrice(e) {
    setCurrentProduct({ ...currentProduct, product_price: e.target.value });
  }
  function handleQuantity(e) {
    setCurrentProduct({ ...currentProduct, product_quantity: e.target.value });
  }
  function handleDiscount(e) {
    setCurrentProduct({ ...currentProduct, discount: e.target.value });
  }
  function handleDescription(e) {
    setCurrentProduct({
      ...currentProduct,
      product_description: e.target.value,
    });
  }
  function handleCategory(e) {
    setCurrentProduct({
      ...currentProduct,
      product_category_id: e.target.value,
    });
  }
  function handleCode(e) {
    setCurrentProduct({ ...currentProduct, code: e.target.value });
  }
  function handleHashtag(e) {
    setCurrentProduct({ ...currentProduct, hashtag: e.target.value });
  }
  function handleTechnology(e) {
    setCurrentProduct({ ...currentProduct, technology: e.target.value });
  }
  function handleRating(e) {
    setCurrentProduct({ ...currentProduct, rating: e.target.value });
  }
  async function handleEdit() {
    editProducts(URL, setProducts, currentProduct);
    navigate("/products");
  }
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

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <Typography variant="h4">Edit Products</Typography>
      <br />
      {currentProduct && (
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Image
            </Typography>
            <TextField
              name="image_path"
              defaultValue={currentProduct.image_path}
              onChange={handleImage}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Title
            </Typography>
            <TextField
              type="text"
              name="product_name"
              defaultValue={currentProduct.product_name}
              onChange={handleTitle}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Price
            </Typography>
            <TextField
              type="number"
              name="product_price"
              defaultValue={currentProduct.product_price}
              onChange={handlePrice}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Quantity
            </Typography>
            <TextField
              type="number"
              name="product_quantity"
              defaultValue={currentProduct.product_quantity}
              onChange={handleQuantity}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Discount
            </Typography>
            <TextField
              type="number"
              name="discount"
              defaultValue={currentProduct.discount}
              onChange={handleDiscount}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Description
            </Typography>
            <TextField
              type="text"
              name="product_description"
              defaultValue={currentProduct.product_description}
              onChange={handleDescription}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Code
            </Typography>
            <TextField
              type="number"
              name="code"
              defaultValue={currentProduct.code}
              onChange={handleCode}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Hashtag
            </Typography>
            <TextField
              type="number"
              name="hashtag"
              defaultValue={currentProduct.hashtag}
              onChange={handleHashtag}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Technology
            </Typography>
            <TextField
              label="Add Tag"
              type="text"
              name="technology"
              defaultValue={currentProduct.technology}
              onChange={handleTechnology}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Rating
            </Typography>
            <TextField
              type="number"
              name="rating"
              defaultValue={currentProduct.rating}
              onChange={handleRating}
              sx={{ width: 600 }}
              variant={"filled"}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <h3 style={{ width: 300 }}>Category ID</h3>
            <TextField
              type="number"
              sx={{ width: 600 }}
              defaultValue={currentProduct.product_category_id}
              name="product_category_id"
              onChange={handleCategory}
              variant={"filled"}
            />
          </Box>
          <br />
          <ColorButtonSave
            variant="outlined"
            onClick={handleEdit}
            sx={{ mx: 1 }}
          >
            Save
          </ColorButtonSave>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <ColorButtonBack variant="outlined">Back</ColorButtonBack>
          </Link>
        </Box>
      )}
    </Box>
  );
}
