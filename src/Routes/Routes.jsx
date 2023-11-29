import MainHomLayouts from "../Components/Layouts/MainHomLayouts";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHomLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
