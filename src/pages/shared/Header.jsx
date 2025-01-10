import { Link, NavLink } from "react-router-dom";
import Sticky from 'react-stickynode';
import useAuth from "../../hooks/useAuth";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../assets/header-logo.webp";


const Header = () => {
    const { user, handleLogOut } = useAuth();

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode") === "true";
        setDark(storedDarkMode);

        if (storedDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [])

    const darkModeHandler = () => {
        const newDarkMode = !dark;
        setDark(newDarkMode);
        document.body.classList.toggle("dark", newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
    }

    return (
        <Sticky innerZ={10}>
            <header className=" bg-white border-b dark:bg-darkBg">
                <div className="top-header bg-primaryColor">
                    <div className="container mx-auto px-4 pt-3 md:pt-0 flex flex-col md:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-5 text-white">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt />
                                <span>+256 173 6647</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdEmail />
                                <span>info@lushcare.com</span>
                            </div>
                        </div>{/* social */}

                        <div className="flex items-center space-x-3">
                            <div className="px-6 py-3 bg-white text-primaryColor font-bold inline-block hover:bg-secondaryColor hover:text-white duration-500">
                                <Link to={'/contact'}>Quote Request</Link>
                            </div>
                            <button onClick={() => darkModeHandler()}>
                                {

                                    dark && <IoSunny size={20} />
                                }
                                {
                                    !dark && <IoMoon size={20} />
                                }
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="navbar container mx-auto px-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <FaBarsStaggered size={20} className="dark:text-primaryColor" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-none mt-3 w-52 p-2 shadow left-1 z-20">
                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2  decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/'>Home</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/all-services'>Services</NavLink></li>
                                {/* <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/blogs'>Blog</NavLink></li> */}
                                {user &&
                                    <li>
                                        <details>
                                            <summary>Dashboard</summary>
                                            <ul className="p-2">
                                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/add-service'>Add Service</NavLink></li>
                                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/manage-services'>Manage Services</NavLink></li>
                                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/booked-services'>Booked Services</NavLink></li>
                                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/current-services'>Service-To-Do</NavLink></li>
                                            </ul>
                                        </details>
                                    </li>
                                }
                                <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/contact'>Contact</NavLink></li>
                            </ul>
                        </div>
                        <Link to={"/"} className="text-sm md:text-base font-bold flex flex-col items-center dark:text-white">
                            <img src={logo} alt="" className="w-12 md:w-[70px] h-full" />
                            <p>Lush<span className="text-primaryColor font-extrabold">Care</span></p>
                        </Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold text-base py-8">
                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to='/all-services'>Services</NavLink></li>
                            {/* <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/blogs'>Blog</NavLink></li> */}
                            {user &&
                                <li>
                                    <details>
                                        <summary className="dark:text-white">Dashboard</summary>
                                        <ul className="flex flex-wrap w-44 rounded-none z-10">
                                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/add-service'>Add Service</NavLink></li>
                                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/manage-services'>Manage Services</NavLink></li>
                                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/booked-services'>Booked Services</NavLink></li>
                                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent'} to='/current-services'>Service-To-Do</NavLink></li>
                                        </ul>
                                    </details>
                                </li>
                            }
                            <li><NavLink className={({ isActive }) => isActive ? 'text-primaryColor underline underline-offset-4 decoration-2 decoration-primaryColor focus:bg-transparent focus:text-primaryColor' : 'hover:text-primaryColor hover:bg-transparent dark:text-white'} to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                    {/* user */}
                    <div className="navbar-end">

                        {user ?
                            <div className="flex items-center gap-2">
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
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-none z-[1] mt-3 w-52 p-2 shadow">
                                        <li><span className="text-base font-bold capitalize dark:text-primaryColor">{user?.displayName}</span></li>
                                        <li><button onClick={() => handleLogOut()} className="underline underline-offset-8 decoration-primaryColor decoration-2">Logout</button></li>
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
                                        className="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease dark:text-white">Login</span>
                                    <span className="relative invisible dark:text-white">Login</span>
                                </button>
                            </Link>
                        }
                    </div>
                </nav>
            </header>
        </Sticky>
    );
};

export default Header;