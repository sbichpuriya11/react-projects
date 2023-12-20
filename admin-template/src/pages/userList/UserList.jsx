import React from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      username: "John Snow",
      avatar:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "John Snow",
      avatar:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "John Snow",
      avatar:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "John Snow",
      avatar:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "John Snow",
      avatar:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "John Snow",
      avatar:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
