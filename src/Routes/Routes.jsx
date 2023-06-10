import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import StudentHome from "../Pages/Dashboard/Student/StudentHome/StudentHome";
import InstructorHome from "../Pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/classes",
                element: <Classes />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // students Route
            {
                path: "studentHome",
                element: <StudentHome />
            },
            {
                path: "payment/:id",
                element: <Payment />
            },
            // instructor route
            {
                path: "instructorHome",
                element: <InstructorHome />
            },
            // admin route
            {
                path: "adminHome",
                element: <AdminHome />
            }
        ]
    }
]);

export default router;