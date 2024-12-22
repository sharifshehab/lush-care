import { NavLink } from "react-router-dom";


const Header = () => {
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
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/login'>LogIn</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/register'>Register</NavLink></li>
                        <li>
                            <details>
                                <summary>Dashboard</summary>
                                <ul className="">
                                    <li className="static"><a>Add Services</a></li>
                                    <li><a>Manage Services</a></li>
                                    <li><a>Booked Services</a></li>
                                    <li><a>Service-To-Do</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                {/* user */}
                <div className="navbar-end">

                    <div className="flex items-center gap-2">
                        <div className="form-control">
                            <span>name</span>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;