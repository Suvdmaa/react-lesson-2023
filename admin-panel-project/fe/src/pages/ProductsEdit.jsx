import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

export default function ProductsEdit({ products, setProducts }) {
  let data = useLocation();
  //   console.log("data", data.state.product);
  const URL = "http://localhost:8080/ecommerce";
  const [currentProduct, setCurrentProduct] = useState(data.state.product[0]);

  function handleImage(e) {
    setCurrentProduct({ ...currentProduct, image: e.target.value });
  }
  function handleTitle(e) {
    setCurrentProduct({ ...currentProduct, title: e.target.value });
  }
  function handleSubTitle(e) {
    setCurrentProduct({ ...currentProduct, subtitle: e.target.value });
  }
  function handlePrice(e) {
    setCurrentProduct({ ...currentProduct, price: e.target.value });
  }
  function handleDiscount(e) {
    setCurrentProduct({ ...currentProduct, discount: e.target.value });
  }
  function handleDescription1(e) {
    setCurrentProduct({ ...currentProduct, description1: e.target.value });
  }
  function handleDescription2(e) {
    setCurrentProduct({ ...currentProduct, description2: e.target.value });
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
    const putData = {
      id: currentProduct.id,
      image: currentProduct.image,
      title: currentProduct.title,
      subtitle: currentProduct.subtitle,
      price: currentProduct.price,
      discount: currentProduct.discount,
      description1: currentProduct.description1,
      description2: currentProduct.description2,
      code: currentProduct.code,
      hashtag: currentProduct.hashtag,
      technology: currentProduct.technology,
      rating: currentProduct.rating,
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
    setProducts(FETCHED_JSON.data);
    console.log("da", products);
  }

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
              type="text"
              name="image"
              defaultValue={currentProduct.image}
              onChange={handleImage}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Title
            </Typography>
            <TextField
              type="text"
              name="title"
              defaultValue={currentProduct.title}
              onChange={handleTitle}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              SubTitle
            </Typography>
            <TextField
              type="text"
              name="subtitle"
              defaultValue={currentProduct.subtitle}
              onChange={handleSubTitle}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Price
            </Typography>
            <TextField
              type="number"
              name="price"
              defaultValue={currentProduct.price}
              onChange={handlePrice}
              sx={{ width: 600 }}
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
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Description 1
            </Typography>
            <TextField
              type="text"
              name="description1"
              defaultValue={currentProduct.description1}
              onChange={handleDescription1}
              sx={{ width: 600 }}
            />
          </Box>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ width: 300 }}>
              Description 2
            </Typography>
            <TextField
              type="text"
              name="description2"
              defaultValue={currentProduct.description2}
              onChange={handleDescription2}
              sx={{ width: 600 }}
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
            />
          </Box>
          <br />
          <Link to={"/ecommerce"} style={{ textDecoration: "none" }}>
            <Button variant="outlined" onClick={handleEdit}>
              Save
            </Button>
          </Link>
          <Link to={"/ecommerce"} style={{ textDecoration: "none" }}>
            <Button variant="outlined">Back</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
