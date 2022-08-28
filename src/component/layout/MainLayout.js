import { Box } from "@mui/material";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Box>{children}</Box>
    </>
  );
};

export default MainLayout;
