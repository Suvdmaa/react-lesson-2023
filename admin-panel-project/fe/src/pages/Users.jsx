import UsersTable from "../components/UsersTable";
import * as React from "react";
import { Container, Box } from "@mui/material";
export default function Users({ users, setUsers }) {
  return (
    <div>
      <Container maxWidth="xl">
        <UsersTable users={users} setUsers={setUsers} />
      </Container>
    </div>
  );
}
