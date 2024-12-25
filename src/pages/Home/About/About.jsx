import { Link } from "react-router-dom";
import about01 from "../../../assets/about01.jpg";
import about02 from "../../../assets/about02.jpg";
import Button from "../../../components/Button";

const About = () => {
    return (
        <section className="container mx-auto px-4 pb-0 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center space-y-5 md:space-y-28">
                <div className="images relative mx-auto lg:mx-0">
                    <img src={about01} alt="" className="relative"/>
                    <img src={about02} alt="" className="absolute top-56 right-24 hidden md:block"/>
                </div>{/* images */}
                <div className="content space-y-8">
                    <h2 className="text-5xl leading-snug">
                        Creating your
                        <br/>
                        dream <span className="text-primaryColor">garden</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <div className="space-y-2 font-semibold pb-5">
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