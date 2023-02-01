import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";

export default function EcommerceTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70, type: "string" },
    { field: "img", headerName: "Image", width: 150, type: "string" },
    { field: "subtitle", headerName: "Subtitle", width: 130, type: "string" },
    { field: "price", headerName: "Price", width: 100, type: "number" },
    { field: "rating", headerName: "Rating", type: "number", width: 100 },
    { field: "actions", headerName: "Actions", width: 150, type: "button" },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
