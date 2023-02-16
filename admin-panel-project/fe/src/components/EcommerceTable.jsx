import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, pink, purple } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Stack, TextField } from "@mui/material";
import { ProductsContext } from "../contexts/ProductsContext";
import { deleteProducts } from "../services/axiosProductsSerces";

export default function EcommerceTable() {
  const { products, setProducts, URL } = useContext(ProductsContext);
  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }
  async function handleDelete(productId) {
    deleteProducts(productId, setProducts, URL);
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A700"],
    },
  }));

  const ColorButtonDelete = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: pink["A200"],
    "&:hover": {
      backgroundColor: pink["A400"],
    },
  }));

  const columns = [
    { field: "id", headerName: "ID", width: 90, type: "string" },
    {
      field: "image",
      headerName: "Image",
      rederCell: (params) => {
        return <img src={params.row.image} width="100px" alt="pic" />;
      },
    },
    { field: "title", headerName: "Title", width: 180, type: "string" },
    { field: "subtitle", headerName: "Subtitle", width: 180, type: "string" },
    { field: "price", headerName: "Price", width: 130, type: "number" },
    {
      field: "description1",
      headerName: "Description",
      width: 130,
      type: "string",
    },
    { field: "rating", headerName: "Rating", type: "number", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <Box>
            <Stack direction="row" spacing={3}>
              <Link
                to={`/ecommerce/edit/${params.row.id}`}
                state={{
                  product: products.filter((p) => p.id === params.row.id),
                }}
                style={{ textDecoration: "none" }}
              >
                <ColorButton variant="contained" color="success">
                  Edit
                </ColorButton>
              </Link>
              <ColorButtonDelete
                variant="contained"
                color="error"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </ColorButtonDelete>
            </Stack>
          </Box>
        );
      },
    },
  ];

  async function handleProductSearch(e) {
    e.preventDefault();
    console.log(e.target.value);
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`;
    const FETCHED_DATA = await fetch(SEARCH_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setProducts(FETCHED_JSON.data);
    }
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          Products 11 total
          <Link
            to="/ecommerce/new"
            style={{ textDecoration: "none", paddingTop: 10 }}
          >
            <ColorButton variant="contained">Create Product</ColorButton>
          </Link>
        </Box>
        <form onSubmit={handleProductSearch}>
          <TextField name="search" />
          <Button type="submit" variant="contained">
            {" "}
            <SearchIcon />
          </Button>
        </form>
      </Box>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
