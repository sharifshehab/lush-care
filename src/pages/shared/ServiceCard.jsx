
import { MdShareLocation } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceArea, service }) => {
    const { _id, name, image, area, price, description, provider_name, provider_email, provider_image } = service;

    return (
        <div className="shadow-md border-b-2 border-primaryColor dark:bg-primaryColor dark:border-white">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-xl font-semibold dark:text-white">{name}</h2>
                <div className="flex items-center gap-[5px]">
                    <h3 className="text-lg font-semibold flex items-center gap-1 dark:text-white">
                        ${price}
                    </h3>
                </div>
            </div>
            <img
                src={image}
                alt={name}
                className="w-full"
            />

            <div className="p-4">
                <p className="dark:text-white">{description}</p>

                <div className="mt-5 flex items-center justify-between w-full">
                    <div className="provider flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primaryColor">
                            <img src={provider_image} alt="" className="w-full h-full rounded-full" />
                        </div>

                        <div className="">
                            <h3 className="">{provider_name}</h3>
                            <span className="">{provider_email}</span>
                        </div>
                    </div>{/* provider */}

                    <Link to={`/service-details/${_id}`}>
                        <button className="py-2 px-6 border border-primaryColor hover:bg-primaryColor hover:text-white duration-300 dark:bg-white dark:hover:bg-secondaryColor">View Detail</button>
                    </Link>
                </div>

                {/* Service Area */}{
                    serviceArea && <div className="flex items-center justify-center gap-[10px]">
                        <MdShareLocation size={31} className="p-1 rounded-md bg-primaryColor text-white" />
                        <div>
                            <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500 dark:text-darkBg">{area}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceCard;