import { createBrowserRouter } from "react-router-dom";
import Report from "./components/report-component/report-component";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import NoPage from "./pages/NoPage";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insert from "./components/insert-component/insert-component";
import ReportLayout from "./pages/ReportLayout";

const routers = createBrowserRouter([
    {
        path: '*',
        element: <NoPage />,
    },
    {
        path: '/report',
        element: <ReportLayout />,
        children: [
            {
                index: true,
                element: <Report />,
            },
            {
                path: '/report/insert',
                element: <Insert />,
            },
        ]
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/Home',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'menu1/:group/:id',
                element: <Menu1 />,
            },
            {
                path: 'menu2',
                element: <Menu2 />,
            },
        ],
    },
]);

export default routers;
