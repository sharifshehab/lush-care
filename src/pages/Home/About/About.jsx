import { Link } from "react-router-dom";
import about01 from "../../../assets/about01.jpg";
import about02 from "../../../assets/about002.png";
import Button from "../../../components/Button";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
        useEffect(() => {
        AOS.init(
            {
                duration: 1600,
                once: false, 
            }
        );
    },[])
    return (
        <section className="container mx-auto px-4 pb-0 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center space-y-5 md:space-y-28">
                <div className="images relative mx-auto lg:mx-0">
                    <img src={about01} alt="" className="relative" data-aos="fade-up" />
                    <img src={about02} alt="" className="absolute top-56 right-24 hidden md:block" data-aos="fade-up"  data-aos-delay={100} />
                </div>{/* images */}
                <div className="content space-y-8">
                    <h2 className="text-5xl dark:text-white" data-aos="zoom-in" data-aos-duration="3000">
                        Nurturing Lawns, 
                    </h2>
                    <h2 className="text-5xl text-primaryColor dark:text-white" data-aos="fade-up"
                        data-aos-duration="5000" >
                        Growing Trust
                    </h2>
                    <p className="dark:text-white leading-relaxed font-medium" data-aos="zoom-in">At Lush Care Ltd., we take pride in transforming outdoor spaces into lush, vibrant havens. Since 2019, our dedicated team has been providing reliable and professional lawn care services tailored to meet the unique needs of our clients. With a commitment to excellence and a passion for greenery, we ensure your lawn thrives, leaving you more time to enjoy the beauty of your outdoor space.</p>
                    <div className="space-y-2 font-semibold pb-5 dark:text-white">
                        <p>Mon-Fri: 9 AM – 10 PM</p>
                        <p>Saturday: 9 AM – 6 PM</p>
                    </div>
                    <Link to='/all-services'><Button text="Visit Us"></Button></Link>
                </div>{/* content */}
            </div>
        </section>
    );
};

export default About;