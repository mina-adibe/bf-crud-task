import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePostRequest } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import EditIcon from "@mui/icons-material/Edit";

// deletePostRequest, editPostRequest,
const Posts = () => {
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "userId", headerName: "user Id", width: 70 },
    {
      field: "title",
      headerName: "title",
      width: 180,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={{
                pathname: `post/${params.row.id}`,
                search: "?mode=view",
              }}>
              {params.row.title}
            </Link>
          </div>
        );
      },
    },
    { field: "body", headerName: "body", width: 180 },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => {
        return `${params.row.id || ""} ${params.row.title || ""}`;
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              dispatch(deletePostRequest(params.row.id));
              enqueueSnackbar("one recorde deleted ", { variant: "warning" });
            }}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="edit"
            onClick={() => {
              navigate({
                pathname: `post/${params.row.id}`,
                search: "?mode=edit",
              });
            }}
          />,
        ];
      },
    },
  ];

  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};

export default Posts;
