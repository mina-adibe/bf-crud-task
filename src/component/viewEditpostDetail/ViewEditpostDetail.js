import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

import useAxios from "../../hooks/useAxios";
import { validationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { editPostRequest } from "../../store/actions";
import { useSnackbar } from "notistack";

const initialValues = { id: "", userId: "", title: "", body: "" };

const ViewEditpostDetail = () => {
  const { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error } = useAxios(id);
  const { enqueueSnackbar } = useSnackbar();
  const [, mode] = location.search.split("=");

  function onSubmit(values) {
    if (mode === "edit") {
      dispatch(editPostRequest(values));
      navigate("/");
      enqueueSnackbar("one recorde updated ", { variant: "success" });
    }
  }

  const { errors, handleSubmit, values, handleChange, touched, setFieldValue } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (data) {
      const fields = ["id", "userId", "title", "body"];
      fields.forEach((field) => setFieldValue(field, data[field], false));
    }
  }, [data, setFieldValue]);

  if (error) {
    return <h2 style={{ color: "red" }}> {error}</h2>;
  }
  const editModeBtns = (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Button color="primary" variant="contained" onClick={() => navigate("/")}>
        Cancel
      </Button>
      <Button color="primary" variant="contained" type="submit">
        save
      </Button>
    </Box>
  );
  const viewModeBtns = (
    <Box>
      <Button color="primary" variant="contained" fullWidth onClick={() => navigate("/")}>
        Go back
      </Button>
    </Box>
  );
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>
          {data && mode === "edit" ? `Edit Post ${data?.id}` : `View Post ${data?.id} (Read only)`}
        </h1>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            minWidth: "40vw",
            justifyContent: "center",
          }}>
          <TextField
            variant="filled"
            fullWidth
            id="id"
            name="id"
            label="Id"
            value={values.id}
            onChange={handleChange}
            error={touched.id && Boolean(errors.id)}
            helperText={touched.id && errors.id}
            inputProps={{ readOnly: true }}
          />
          <TextField
            variant="filled"
            fullWidth
            id="userId"
            name="userId"
            label="userId"
            value={values.userId}
            onChange={handleChange}
            error={touched.userId && Boolean(errors.userId)}
            helperText={touched.userId && errors.userId}
            inputProps={{ readOnly: true }}
          />

          <TextField
            variant="filled"
            fullWidth
            id="title"
            name="title"
            label="title"
            value={values.title}
            onChange={handleChange}
            inputProps={{ readOnly: mode === "edit" ? false : true }}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <TextField
            variant="filled"
            fullWidth
            id="body"
            name="body"
            label="body"
            type="body"
            value={values.body}
            onChange={handleChange}
            inputProps={{ readOnly: mode === "edit" ? false : true }}
            error={touched.body && Boolean(errors.body)}
            helperText={touched.body && errors.body}
          />
          <Box>{mode === "edit" ? editModeBtns : viewModeBtns}</Box>
        </Box>
      </form>
    </Box>
  );
};

export default ViewEditpostDetail;
