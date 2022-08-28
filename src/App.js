import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "./component/layout/MainLayout.js";

import RoutesComponent from "./routes/Routes";

import { SnackbarProvider } from "notistack";
import { getPostsRequest } from "./store/actions/index.js";
import Loader from "./component/loader/Loader.js";

function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.loader);

  console.log("loader", loader);
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
        <RoutesComponent />
        {loader && <Loader />}
      </MainLayout>
    </SnackbarProvider>
  );
}

export default App;

// <div>
// heloooo
// <div>
//   <button
//     onClick={() => {
//       dispatch(deletePostRequest(2));
//     }}>
//     delete
//   </button>
// </div>
// <div>
//   <button
//     onClick={() => {
//       dispatch(
//         editPostRequest({
//           body: "Minaaaaaaaaaaaaaaaa",
//           id: 3,
//           title: "Hello here title",
//           userId: 1,
//         })
//       );
//     }}>
//     update
//   </button>
// </div>
// </div>
