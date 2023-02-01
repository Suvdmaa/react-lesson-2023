import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function EcommerceTable({ products, setProducts }) {
  const URL = "http://localhost:8080/ecommerce";

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90, type: "string" },
    { field: "image", headerName: "Image", width: 180, type: "string" },
    { field: "title", headerName: "Title", width: 180, type: "string" },
    { field: "subtitle", headerName: "Subtitle", width: 180, type: "string" },
    { field: "price", headerName: "Price", width: 130, type: "number" },
    { field: "rating", headerName: "Rating", type: "number", width: 130 },
    { field: "actions", headerName: "Actions", width: 150, type: "button" },
  ];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A700"],
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    border: "1px solid",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          Products 11 total
          <Link to="/ecommerce/new" style={{ textDecoration: "none" }}>
            <ColorButton variant="contained">Create Product</ColorButton>
          </Link>
        </Box>
        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
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
