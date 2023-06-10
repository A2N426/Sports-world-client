import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    const [isAdmin] = useAdmin();
    const admin = isAdmin?.admin?.admin;
    const instructor = isAdmin?.instructor?.instructor;

    const navItem = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/instructors">Instructors</Link>
        </li>
        <li>
            <Link to="/classes ">Classes</Link>
        </li>
        {user && <li>
            <Link to={admin ? (
                "/Dashboard/adminHome"
            ) : instructor ? (
                "/dashboard/instructorHome"
            ) : (
                "/dashboard/studentHome"
            )}>Dashboard</Link>
        </li>}
        <li>
            <Link onClick={handleLogout}>logout</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-200 lg:px-24 px-6">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}

                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-3">
                        <img className="h-10 lg:w-10 w-14 rounded-full" src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                        <p className="normal-case text-xl font-semibold">Open Sports</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {user ?
                        <img className="rounded-full h-10" src={user.photoURL} alt="" />
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;