import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import NoPage from "./pages/NoPage";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routers = createBrowserRouter([
    {
        path: '*',
        element: <NoPage />,
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
