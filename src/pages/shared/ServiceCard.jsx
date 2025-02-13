import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceCard = ({ serviceArea, maxCharacter, service, animationDelay }) => {
    const { _id, name, image, area, price, description, provider_name, provider_email, provider_image } = service;

    useEffect(() => {
        AOS.init(
            {
                duration: 1300,
                once: true,
            }
        );
    }, []);

    return (
        <div className="shadow-md border-b-4 border border-primaryColor p-5 flex flex-col dark:border-white dark:bg-primaryColor" data-aos="fade-up" data-aos-delay={animationDelay}>

            <div className="flex items-baseline justify-between w-full p-4 flex-grow">

                <h2 className="text-lg md:text-2xl font-semibold text-primaryColor capitalize underline underline-offset-8 decoration-gray-300 decoration-dashed min-h-[4rem] dark:text-white dark:decoration-secondaryColor">{name}</h2>

                <h3 className="text-base md:text-[20px] text-secondaryColor font-semibold flex items-center gap-1 underline underline-offset-4 decoration-double">
                    ${price}
                </h3>
            </div>

            <img
                src={image}
                alt={name}
                className="w-full h-72 object-cover"
            />

            <div className="flex-grow my-5">
                <p className="leading-normal">{maxCharacter ? `${description.slice(0, 100)}...` : description}</p>
            </div>

            <div className="p-4 space-y-5">

                <div className="flex flex-col md:flex-row items-center justify-center space-y-5 w-full">

                    {/*         <div className="provider flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primaryColor">
                            <img src={provider_image} alt="" className="w-full h-full rounded-full" />
                        </div>                      
                            <div className="border-l-2 border-gray-400 pl-2 font-medium text-primaryColor dark:text-white">
                                <h3 className="capitalize font-bold">{provider_name}</h3>
                                <span>{provider_email}</span>
                            </div> 
                    </div> */}

                    <Link to={`/service-details/${_id}`}>
                        <button className="py-2 px-6  text-primaryColor font-semibold bg-white border-2 border-primaryColor hover:bg-primaryColor hover:text-white duration-500">View Detail</button>
                    </Link>
                </div>

                {/* Service Area */}{
                    serviceArea && <div className="flex items-center justify-center gap-2">

                        <div>
                            <p className="text-darkBg text-sm"><span className="font-bold text-primaryColor dark:text-white">Service Area:</span> {area}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceCard;