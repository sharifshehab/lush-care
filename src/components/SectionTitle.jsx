import { Zoom } from "react-awesome-reveal";
import lawnIcon from "../assets/lawn.png";
import lineImg from "../assets/line.png";
const SectionTitle = ({ firstTitle = 'section', secondTitle = 'title' }) => {
    return (
        <div className="sec-title text-center">
            <Zoom duration={1500} triggerOnce={true}>
                <div className="flex items-center justify-center gap-4 mb-2">
                    <img src={lineImg} alt="" />
                    <img src={lawnIcon} alt="" />
                    <img src={lineImg} alt="" />
                </div>
            </Zoom>
            <h2 className="text-3xl md:text-[40px] dark:text-white">{firstTitle} <span className="text-primaryColor">{secondTitle}</span></h2>
        </div>
    );
};

export default SectionTitle;