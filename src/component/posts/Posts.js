/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePostRequest } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import EditIcon from "@mui/icons-material/Edit";

const Posts = ({ posts }) => {
  const [pageSize, setPageSize] = React.useState(10);

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "userId", headerName: "user Id", flex: 0.5 },
    {
      field: "title",
      flex: 1.5,
      headerName: "title",
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
    { field: "body", headerName: "body", flex: 1.5 },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 0.5,
      getActions: (params) => [
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
      ],
    },
  ];

  return (
    <Container>
      <Box sx={{ height: "70vh" }}>
        <DataGrid
          rows={posts}
          columns={columns}
          rowsPerPageOptions={[10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      </Box>
    </Container>
  );
};

export default Posts;

Posts.propTypes = {
  posts: PropTypes.array,
};
