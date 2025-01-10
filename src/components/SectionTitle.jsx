import { Slide, Zoom } from "react-awesome-reveal";
import lawnIcon from "../assets/lawn.png";
import lineImg from "../assets/line.png";
const SectionTitle = ({ firstTitle = 'section', secondTitle = 'title' }) => {
    return (
        <div className="sec-title text-center">
            <Zoom duration={1500} triggerOnce={true}>
                <div className="flex items-center justify-center gap-4 mb-2">
                    <Slide delay={300} cascade damping={0.3} direction="right" duration={1600} triggerOnce={true}>
                        <img src={lineImg} alt="" />
                    </Slide>
                    <Zoom duration={1500} triggerOnce={true}>
                        <img src={lawnIcon} alt="" />
                    </Zoom>
                    <Slide delay={300} cascade damping={0.3} direction="left" duration={1600} triggerOnce={true}>
                        <img src={lineImg} alt="" />
                    </Slide>
                </div>
                <h2 className="text-3xl md:text-[40px] dark:text-white">{firstTitle} <span className="text-primaryColor">{secondTitle}</span></h2>
            </Zoom>
        </div>
    );
};

export default SectionTitle;