import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "./component/layout/MainLayout.js";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

import RoutesComponent from "./routes/Routes";
import { getPostsRequest } from "./store/actions/index.js";
import Loader from "./component/loader/Loader.js";
import { ErrorBoundary } from "./component/errorBoundary/ErrorBoundary.js";

function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
