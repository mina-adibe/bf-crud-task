import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "../component/postDetail/postDetail";
import Posts from "../component/posts/Posts";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
