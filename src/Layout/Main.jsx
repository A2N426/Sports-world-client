import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default Main;