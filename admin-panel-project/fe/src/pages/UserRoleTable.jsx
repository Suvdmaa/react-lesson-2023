import { Box, Typography, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import { green, pink, purple } from "@mui/material/colors";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserRoleContext } from "../contexts/UserRoleContext";
import { useNavigate } from "react-router-dom";

export default function UserRole() {
  const { userRole, setUserRole, URL } = useContext(UserRoleContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);
  ("");
  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserRole(FETCHED_JSON);
  }
  async function handleDelete(userRoleId) {
    toast(`You deleted User`);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userRoleId: userRoleId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserRole(FETCHED_JSON);
    navigate("/user-roles");
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
      field: "user_role_name",
      headerName: "User Role Name",
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
                to={`/user-role/edit/${params.row.id}`}
                state={{
                  userRoleName: userRole.filter((p) => p.id === params.row.id),
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
      <Typography variant="h4">User Role</Typography>
      <Link to={"/user-role/add"} style={{ textDecoration: "none" }}>
        <ColorButton variant="contained" color="success">
          Add
        </ColorButton>
      </Link>
      <div style={{ height: 350, width: "60%" }}>
        <DataGrid
          rows={userRole}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>

      <br />
    </Box>
  );
}
