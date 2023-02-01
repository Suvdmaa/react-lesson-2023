import UsersTable from "../components/UsersTable";
import * as React from "react";

export default function Users({ users, setUsers }) {
  return (
    <div>
      <UsersTable users={users} setUsers={setUsers} />
    </div>
  );
}
