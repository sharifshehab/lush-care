import { BiSolidLeaf } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceArea, service }) => {
    const { _id, name, image, area, price, description, provider_name, provider_email, provider_image } = service;

    return (
        <div className="shadow-md">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <div className="flex items-center gap-[5px]">
                    <BiSolidLeaf
                        className="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer" />
                    <FaFire className="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer" />
                </div>
            </div>
            <img
                src={image}
                alt={name}
                className="w-full"
            />

            <div className="p-4">
                <p>{description}</p>

                <div className="mt-5 flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold flex items-center gap-1">
                        ${price}
                    </h3>
                    <Link to={`/service-details/${_id}`}> 
                        <button className="py-2 px-6 border border-primaryColor">View Detail</button>
                    </Link>
                </div>
                <div className="provider flex items-center gap-4">
                    <div className="w-[50px] h-[50px] flex items-center
          justify-center text-[#fff] text-[1.3rem] rounded-full bg-[#f36f23]">
                        <img src={provider_image} alt="" className="w-full h-full rounded-full"/>
                    </div>

                    <div className="">
                        <h3 className="">{provider_name}</h3>
                        <span className="">{provider_email}</span>
                    </div>
                </div> {/* provider */}

                {/* Service Area */}{
                    serviceArea && <div className="flex items-center gap-[10px]">
                        <BsSend
                            className="p-[8px] lg:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]" />
                        <div>
                            <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] text-gray-800">{area}
                            </h4>
                            <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">Alipur, Faridpur</p>
                        </div>
                    </div>
                }

            </div>

        </div>
    );
};

export default ServiceCard;