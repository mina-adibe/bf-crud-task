import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="spinner_container">
      <CircularProgress />
    </div>
  );
};

export default Loader;
