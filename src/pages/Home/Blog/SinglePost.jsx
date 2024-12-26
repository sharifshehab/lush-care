import AOS from "aos";
import 'aos/dist/aos.css';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { useEffect } from "react";

const SinglePost = ({ tag, title, time, image, animationDelay }) => {
    useEffect(() => {
        AOS.init(
            {
                duration: 1600,
                once: true, 
            }
        );
    },[])

    return (
        <div
            className="shadow-md hover:scale-[1.05] transition-all duration-300 overflow-hidden relative cursor-pointer group" data-aos="fade-up" data-aos-delay={animationDelay}>

            {/*  icons  */}
            <div
                className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
                <FaRegHeart className="text-[1.1rem] text-gray-600" />
                <div className="flex items-center gap-[5px]">
                    <MdOutlineTimer className="text-primaryColor text-[1.1rem]" />
                    <p className="text-[1rem] text-primaryColor">{time} min</p>
                </div>
            </div>

            {/*  image  */}
            <img
                src={image}
                alt="animated_card"
                className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />

            {/*  texts  */}
            <div className="absolute bottom-0 left-0  pb-6 w-full text-center space-y-2">
                <p className="uppercase text-gray-600 dark:text-white">{tag}</p>
                <h3 className="text-xl font-bold dark:text-white">{title}</h3>
                <p className="text-sm font-semibold text-primaryColor uppercase underline underline-offset-4">read more</p>
            </div>
        </div>
    );
};

export default SinglePost;