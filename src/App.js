import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "./component/layout/MainLayout.js";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

import RoutesComponent from "./routes/Routes";
import { getPostsRequest } from "./store/actions/index.js";
import Loader from "./component/loader/Loader.js";

function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}>
      <MainLayout>
        <CssBaseline />
        <RoutesComponent />
        {loader && <Loader />}
      </MainLayout>
    </SnackbarProvider>
  );
}

export default App;
