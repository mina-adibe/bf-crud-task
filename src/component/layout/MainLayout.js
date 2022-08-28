import { Box } from "@mui/material";
import React from "react";
import Header from "../header/Header.js";

const MainLayout = ({ children }) => {
  const content = { margin: "30px" };
  return (
    <>
      <Header />
      <Box>
        <Box sx={content}>{children}</Box>
      </Box>
    </>
  );
};

export default MainLayout;
