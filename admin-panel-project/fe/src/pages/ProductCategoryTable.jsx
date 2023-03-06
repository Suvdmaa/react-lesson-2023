import { useContext, useEffect } from "react";
import { ProductCateContext } from "../contexts/ProductCategoryContext";
import { Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { green, pink, purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";

export default function ProductCategory() {
  const { productCate, setProductCate, URL } = useContext(ProductCateContext);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProductCate(FETCHED_JSON);
  }

  async function handleDelete(id) {
    toast(`You deleted Product Category`);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProductCate(FETCHED_JSON);
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
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "product_category_name",
      headerName: "Title",
      width: 200,
    },
    {
      field: "product_category_description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <Box>
            <Stack direction="row" spacing={3}>
              <Link
                to={`/product-category/edit/${params.row.id}`}
                state={{
                  product: productCate.filter((p) => p.id === params.row.id),
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
              <ToastContainer />
            </Stack>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ mx: "50px", my: "50px", p: "50px", border: 1, borderRadius: 2 }}>
      <Typography variant="h4">Product Category</Typography>
      <Link to={"/product-category/add"} style={{ textDecoration: "none" }}>
        <ColorButton variant="contained" color="success">
          Add
        </ColorButton>
      </Link>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          rows={productCate}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Box>
  );
}
