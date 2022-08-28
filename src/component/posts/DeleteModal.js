import { Box, Button, Modal, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 10,
  p: 2,
};

const DeleteModal = ({ handleClose, postId, deletePostRequest, open }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Post no {postId} !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure ?
          </Typography>

          <Box sx={{ display: "flex", gap: "30px", my: "20px" }}>
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                dispatch(deletePostRequest(postId));
                enqueueSnackbar("one recorde deleted ", { variant: "warning" });
                handleClose();
              }}>
              Delete
            </Button>
            <Button variant="contained" color="success" onClick={() => handleClose()}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteModal;

DeleteModal.propTypes = {
  handleClose: PropTypes.node.isRequired,
  postId: PropTypes.node.isRequired,
  deletePostRequest: PropTypes.node.isRequired,
  open: PropTypes.node.isRequired,
};
