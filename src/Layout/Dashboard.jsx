import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Foot from "../Pages/Shared/Foot/Foot";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log("from isAdmin", isAdmin)
    return (
        <div>
            <div className="drawer mb-10">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <Link to="/" className="flex-1 px-2 mx-2 gap-3">
                            <img className="h-10 w-10  rounded-full" src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1 className="text-xl font-semibold">Sports World</h1>
                        </Link>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {
                                    isAdmin
                                        ?
                                        <>
                                            <li><a>Admin 1</a></li>
                                            <li><a>Admin 2</a></li>
                                        </> 
                                        :
                                        <>
                                            <li><a>Students 1</a></li>
                                            <li><a>Students 2</a></li>
                                        </>
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
            <Foot />
        </div>
    );
};

export default Dashboard;