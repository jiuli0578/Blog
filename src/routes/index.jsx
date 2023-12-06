import Label from "../pages/Label";
import Work from "../pages/Work";
import FrdC from "../pages/FrdC";
import About from "../pages/About";

export default [
    {
        path: "/work",
        element: <Work/>,
    },
    {
        path: "/label",
        element: <Label/>,
    },
    {
        path: "/frdC",
        element: <FrdC/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
]
