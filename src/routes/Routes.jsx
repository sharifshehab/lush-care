
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
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import BookedServices from "../pages/BookedServices/BookedServices";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Contact from "../pages/Contact/Contact";

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
                path:'blogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path:'all-services',
                element: <AllServices></AllServices>
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
                path:'booked-services',
                element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
            },
            {
                path:'current-services',
                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            },
            {
                path: 'service-details/:serviceId',
                loader: async ({ params }) => {
                    return fetch(`https://lush-care-server.vercel.app/service/${params.serviceId}`);
                },
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path:'login',
                element: <LogIn></LogIn>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path:'contact',
                element: <Contact></Contact>
            },
        ]
    }
])