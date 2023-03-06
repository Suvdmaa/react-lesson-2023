import UsersTable from "./UsersTable";
import * as React from "react";
import { Container } from "@mui/material";

export default function Users() {
  return (
    <div>
      <Container maxWidth="xl">
        <UsersTable />
      </Container>
    </div>
  );
}
