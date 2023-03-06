import { useContext, useEffect } from "react";
import { ProductCateContext } from "../contexts/ProductCategoryContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function ProductCategoryAdd() {
  const { productCate, setProductCate, URL } = useContext(ProductCateContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProductCate(FETCHED_JSON);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      product_category_name: e.target.product_category_name.value,
      product_category_description: e.target.product_category_description.value,
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
    <Box sx={{ mx: "50px", my: "50x", p: "50px", border: 1, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Add Product Category</Typography>
        <br />
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" style={{ width: 300 }}>
            Category Name
          </Typography>
          <TextField
            name="product_category_name"
            variant="filled"
            sx={{ width: 600 }}
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
          />
        </Box>

        <br />
        <ColorButtonSave variant="outlined" sx={{ mx: 1 }} type="submit">
          Save
        </ColorButtonSave>
        <Link to="/product-category">
          <ColorButtonBack variant="outlined">Back</ColorButtonBack>
        </Link>
      </form>
    </Box>
  );
}
