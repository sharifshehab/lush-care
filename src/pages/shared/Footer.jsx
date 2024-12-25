import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import logo from "../../assets/logo3.png";

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
                                info@yousite.com
                            </a>
                            <a href="tel:1234567890">
                                123 (456) 7890
                            </a>
                        </div>
                    </nav>

                    <aside className="flex flex-col items-center text-center space-y-5 order-first md:order-none">
                        <a href="#" className="text-xl font-bold flex flex-col items-center text-white">
                            <img src={logo} alt="" className="w-24 h-full" />
                            <p>Lush<span className="text-secondaryColor font-extrabold">Care</span></p>
                        </a>
                        <p>
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>

                    <nav className="flex flex-col items-center space-y-2">
                        <h6 className="text-lg font-semibold text-white underline underline-offset-4 decoration-secondaryColor">Follow Us</h6>
                        <p>connect with to grow</p>
                        <div className="grid grid-flow-col items-center gap-4">
                            <a href="#" target="black">
                                <BsFacebook size={26} color="#fff" />
                            </a>
                            <a href="#" target="black">
                                <AiFillTwitterCircle size={30} color="#fff" />
                            </a>
                            <a href="#" target="black">
                                <GrPinterest size={26} color="#fff" />
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