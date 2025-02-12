import { Fade, Slide, Zoom } from "react-awesome-reveal";
import banner from "../../../assets/banner.webp";
import arrow from "../../../assets/down-arrow.gif";
import spire from "../../../assets/spire1.webp";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        window.scrollTo(window.scrollX, window.screenY + 11);
    }, [])
    return (
        <>
            <div className="w-full relative">
                <div className="w-full lg:h-[750px]">
                    <img src={banner} alt="image" className=" h-full w-full" />
                </div>{/* image */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

                <Fade triggerOnce={true} fraction={0}>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <Slide direction="up" cascade damping={0.3} duration={1400} triggerOnce={true}>
                            <p className="text-white text-xl md:text-[33px] font-bold uppercase">Professional Care
                            </p>
                            <p className="text-white text-lg md:text-[27px] mt-3">Trusted Expertise</p>
                        </Slide>
                        <Zoom delay={700} cascade damping={0.3} duration={1700} triggerOnce={true}>
                            <h1 className="text-2xl md:text-5xl lg:text-[73px] capitalize text-primaryColor font-semibold my-2 lg:my-10">Lush Greens, Happy Scenes</h1>
                        </Zoom>
                        <Slide direction="down" cascade damping={0.3} duration={1400} triggerOnce={true}>
                            <div className="flex items-center justify-center space-x-4 mb-3">
                                <img src={spire} alt="image" className="w-1/3" />
                                <span className="text-white text-lg md:text-[27px]">at</span>
                                <img src={spire} alt="image" className="transform rotate-180 w-1/3" />
                            </div>
                            <p className="text-white text-xl md:text-[33px] font-bold uppercase">Lush Care</p>
                        </Slide>
                    </div>{/* content */}
                </Fade>

            </div>

            <div className="">
                <img src={arrow} alt="" className="w-14 mx-auto" />
            </div>
        </>


    );
};

export default Hero;