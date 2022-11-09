import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Service/Service";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";

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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])