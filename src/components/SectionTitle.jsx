import lawnIcon from "../assets/lawn.png";
import lineImg from "../assets/line.png";
const SectionTitle = ({firstTitle = 'section', secondTitle='title'}) => {
    return (
        <div className="text-center">
            <div className="flex items-center justify-center gap-4">
                <img src={lineImg} alt="" />
                <img src={lawnIcon} alt="" />
                <img src={lineImg} alt="" />
            </div>
            <h2>{firstTitle} <span className="underline text-primaryColor">{secondTitle}</span></h2>
        </div>
    );
};

export default SectionTitle;