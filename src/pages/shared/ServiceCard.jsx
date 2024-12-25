import { Link } from "react-router-dom";

const ServiceCard = ({ serviceArea, maxCharacter, service }) => {
    const { _id, name, image, area, price, description, provider_name, provider_email, provider_image } = service;

    return (
        <div className="shadow-md border-b-4 border-secondaryColor bg-primaryColor p-5 dark:border-white">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-lg md:text-2xl font-semibold text-white capitalize">{name}</h2>
                <div className="flex items-center gap-[5px]">
                    <h3 className="text-base md:text-[20px] text-white font-semibold flex items-center gap-1 underline underline-offset-4 decoration-double">
                        ${price}
                    </h3>
                </div>
            </div>
            <img
                src={image}
                alt={name}
                className="w-full h-72 object-cover"
            />

            <div className="p-4">
                <p className="text-white">{maxCharacter ? `${description.slice(0, 100)}...` : description}</p>
                <div className="mt-5 flex items-center justify-between w-full">
                    <div className="provider flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primaryColor">
                            <img src={provider_image} alt="" className="w-full h-full rounded-full" />
                        </div>
                        <div className="border-l-2 pl-2 font-medium">
                            <h3>{provider_name}</h3>
                            <span>{provider_email}</span>
                        </div>
                    </div>{/* provider */}

                    <Link to={`/service-details/${_id}`}>
                        <button className="py-2 px-6  text-primaryColor font-semibold bg-white border border-secondaryColor hover:bg-secondaryColor hover:text-white duration-300">View Detail</button>
                    </Link>
                </div>

                {/* Service Area */}{
                    serviceArea && <div className="flex items-center justify-center gap-2">
                        
                        <div>
                            <p className="text-darkBg"><span className="font-bold text-white">Service Area:</span> {area}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceCard;