import { Typography, Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { ProductCateContext } from "../contexts/ProductCategoryContext";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ProductCategoryEdit() {
  const { productCate, setProductCate, URL } = useContext(ProductCateContext);
  let data = useLocation();
  const [currentCategory, setCurrentCategory] = useState(data.state.product[0]);
  const navigate = useNavigate();

  function handleName(e) {
    setCurrentCategory({
      ...currentCategory,
      product_category_name: e.target.value,
    });
  }

  function handleDesc(e) {
    setCurrentCategory({
      ...currentCategory,
      product_category_description: e.target.value,
    });
  }

  async function handleEdit() {
    console.log(currentCategory);
    const putData = {
      id: currentCategory.id,
      productCatName: currentCategory.product_category_name,
      productCatDesc: currentCategory.product_category_description,
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
    setProductCate(FETCHED_JSON);
    navigate("/product-category");
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
      <Typography variant="h4">Edit Product Category</Typography>
      <br />
      {currentCategory && (
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" style={{ width: 300 }}>
              Category Name
            </Typography>
            <TextField
              name="product_category_name"
              variant="filled"
              sx={{ width: 600 }}
              defaultValue={currentCategory.product_category_name}
              onChange={handleName}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" style={{ width: 300 }}>
              Description
            </Typography>
            <TextField
              name="product_category_description"
              variant="filled"
              sx={{ width: 600 }}
              defaultValue={currentCategory.product_category_description}
              onChange={handleDesc}
            />
          </Box>

          <br />
          <ColorButtonSave
            variant="outlined"
            sx={{ mx: 1 }}
            onClick={handleEdit}
          >
            Save
          </ColorButtonSave>
          <Link to="/product-category">
            <ColorButtonBack variant="outlined">Back</ColorButtonBack>
          </Link>
        </Box>
      )}
    </Box>
  );
}
