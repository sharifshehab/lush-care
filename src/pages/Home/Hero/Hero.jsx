import { Fade, Slide, Zoom } from "react-awesome-reveal";
import img1 from "../../../assets/slides_2.jpg";
import img2 from "../../../assets/spire1.webp";
import img3 from "../../../assets/spire2.png";

const Hero = () => {
    return (
        <div className="w-full relative">
            <div className="w-full lg:h-[800px]">
                <img src={img1} alt="image" className=" h-full w-full" />
            </div>{/* image */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <Fade triggerOnce={true}>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <Slide direction="up" cascade damping={0.3} duration={1400} triggerOnce={true}>
                        <p className="text-white text-2xl md:text-[34px]  font-bold uppercase">professional</p>
                        <p className="text-white text-2xl md:text-[27px]">company</p>
                    </Slide>
                    <Zoom delay={700} cascade damping={0.3} duration={1700} triggerOnce={true}>
                        <h1 className="text-4xl lg:text-8xl capitalize text-primaryColor font-semibold py-3">garden maintain</h1>
                    </Zoom>
                    <Slide direction="down" cascade damping={0.3} duration={1400} triggerOnce={true}>
                        <div className="flex items-center justify-center space-x-4 mb-3">
                            <img src={img2} alt="image" className="w-1/3" />
                            <span className="text-white text-2xl md:text-[27px]">at</span>
                            <img src={img3} alt="image" className="transform rotate-180 w-1/3" />
                        </div>
                        <p className="text-white text-2xl md:text-[34px] font-bold uppercase">Lush Care</p>
                    </Slide>
                </div>{/* content */}
            </Fade>
        </div>
    );
};

export default Hero;