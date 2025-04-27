import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import { routesGenerator } from "../utils/routesGenerator";
import { adminRoutes } from "./Admin.Routes";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: routesGenerator(adminRoutes),
  },
]);
