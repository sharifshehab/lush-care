import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../assets/footer-logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-primaryColor text-neutral-content p-24">
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-around gap-y-8 md:gap-y-0'>
                    <nav className="flex flex-col items-center space-y-2">
                        <h6 className="text-lg font-semibold text-white underline underline-offset-4 decoration-secondaryColor">Contact Us</h6>
                        <p>1556 Broadway, NY, 10120</p>

                        <div className="grid items-center text-center space-y-2 text-white">
                            <a href="mailto:svshuvo696@gmail.com">
                                info@lushcare.com
                            </a>
                            <a href="tel:2561736647">
                                256 (173) 6647
                            </a>
                        </div>
                    </nav>

                    <aside className="flex flex-col items-center text-center order-first md:order-none">
                        <Link to={"/"} className="text-xl font-bold flex flex-col items-center text-white">
                            <img src={logo} alt="" className="w-24 h-full"/>
                            <p>Lush<span className="text-secondaryColor font-extrabold">Care</span></p>
                        </Link>
                        <p className="mt-2">
                            Lush Care Ltd.
                            <br />
                            Providing trusted and professional
                            <br />
                            lawn care services since 2019.
                        </p>
                    </aside>

                    <nav className="flex flex-col items-center space-y-2">
                        <h6 className="text-lg font-semibold text-white underline underline-offset-4 decoration-secondaryColor">Follow Us</h6>
                        <p>Stay connected and grow with us!</p>
                        <div className="grid grid-flow-col items-center gap-4">
                            <a href="https://www.facebook.com/svshuvo.4.0" target="black">
                                <FaFacebookSquare size={28} color="#fff" />
                            </a>
                            <a href="https://x.com" target="black">
                                <FaTwitterSquare size={27} color="#fff" />
                            </a>
                            <a href="https://www.linkedin.com/in/sharifshehab" target="black">
                                <BsLinkedin size={24} color="#fff" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="footer footer-center bg-secondaryColor text-base-content p-5 dark:bg-white">
                <aside>
                    <p className="text-white dark:text-primaryColor">LushCare © {new Date().getFullYear()} - All Rights Reserved.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;