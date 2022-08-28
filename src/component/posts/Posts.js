/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { deletePostRequest } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const Posts = ({ posts }) => {
  const [postId, setPostId] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pageSize, setPageSize] = React.useState(10);

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
          icon={<VisibilityIcon sx={{ color: "green" }} />}
          label="view"
          onClick={() => {
            navigate({
              pathname: `post/${params.row.id}`,
              search: "?mode=view",
            });
          }}
        />,

        <GridActionsCellItem
          icon={<EditIcon sx={{ color: "darkblue" }} />}
          label="edit"
          onClick={() => {
            navigate({
              pathname: `post/${params.row.id}`,
              search: "?mode=edit",
            });
          }}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon sx={{ color: "red" }} />}
          label="Delete"
          onClick={() => {
            setPostId(params.row.id);
            handleOpen();
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
      <DeleteModal
        handleClose={handleClose}
        postId={postId}
        deletePostRequest={deletePostRequest}
        open={open}
      />
    </Container>
  );
};

export default Posts;

Posts.propTypes = {
  posts: PropTypes.array,
};
