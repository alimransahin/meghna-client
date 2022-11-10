import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Service from "../Pages/Service/Service";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/services',
                element:<Service></Service>
            },
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://meghna-tourist-service-server-alimransahin.vercel.app/services/${params.id}`)
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/my-reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'/add-service',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])