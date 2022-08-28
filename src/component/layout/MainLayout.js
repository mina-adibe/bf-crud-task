import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Box>{children}</Box>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
