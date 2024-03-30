import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../maninlayout";
import Elan from "../pages/elanlar";
import Category from "../pages/kateqoriyalar";
import Industry from "../pages/senaye";
import Company from "../pages/sirketler";
import MyFavorites from "../pages/favoriler";
import Subscribe from "../pages/subscribe";
import Service from "../pages/services";
import Communication from "../pages/elaqe";
import AboutUs from "../pages/aboutUs";
import RightBar from "../rightbar";

const routes = createBrowserRouter([{

    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Elan />
        },
        {
            path: "/category",
            element: <Category />
        },
        {
            path: "/industry",
            element: <Industry />
        },
        {
            path: "/company",
            element: <Company />
        },
        {
            path: "/favorites",
            element: <MyFavorites />
        },
        {
            path: "/subscribe",
            element: <Subscribe />
        },
        {
            path: "/services",
            element: <Service />
        },
        {
            path: "/communication",
            element: <Communication />
        },
        {
            path: "/aboutus",
            element: <AboutUs />
        },
    ]
}
])

export default routes