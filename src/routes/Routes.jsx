
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import AllServices from "../pages/AllServices/AllServices";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/AddService/AddService";
import ManageServices from "../pages/ManageServices/ManageServices";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:'all-services',
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
            },
            {
                path:'add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'manage-services',
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path:'login',
                element: <LogIn></LogIn>
            },
            {
                path:'register',
                element: <Register></Register>
            },
        ]
    }
])