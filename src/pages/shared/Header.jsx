import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <header>
            <nav className="navbar p-0 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li>
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl">
                        <img src="" alt="" />
                        LushCare
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/all-services'>Services</NavLink></li>
                        {user &&
                            <li>
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul className="">
                                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/add-service'>Add Service</NavLink></li>
                                        <li><a>Manage Services</a></li>
                                        <li><a>Booked Services</a></li>
                                        <li><a>Service-To-Do</a></li>
                                    </ul>
                                </details>
                            </li>
                        }
                    </ul>
                </div>
                {/* user */}
                <div className="navbar-end">
                    {user ?
                        <div className="flex items-center gap-2">
                            <div className="form-control">
                                <span>{user?.displayName}</span>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            referrerPolicy="no-referrer"
                                            alt={user?.displayName}
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><button onClick={() => handleLogOut()}>Logout</button></li>
                                </ul>
                            </div>
                        </div> :
                        <Link to={'/login'}>
                            <button
                                className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-primaryColor group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span
                                    className="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                                <span className="relative invisible">Login</span>
                            </button>
                        </Link>

                    }







                </div>
            </nav>
        </header>
    );
};

export default Header;