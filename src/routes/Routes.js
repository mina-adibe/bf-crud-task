import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../component/header/Header";

import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import PostDetails from "../pages/PostDetails";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
