import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const { user } = useAuth();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [isModalOpen, setisModalOpen] = useState(false);

    const { serviceId } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: details = [], isPending, refetch } = useQuery({
        queryKey: ['services', serviceId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/service/${serviceId}`);
            return res.data;
        }
    });
    const { _id, name, image, area, price, description, provider_name, provider_email, provider_image } = details;

    useEffect(() => {
        setValue("id", _id || "");
        setValue("name", name || "");
        setValue("image", image || "");
        setValue("providerName", provider_name || "");
        setValue("providerEmail", provider_email || "");
        setValue("myName", user.displayName || "");
        setValue("myEmail", user.email || "");
        setValue("price", price || "");
    }, [details, user, setValue]);

    const onSubmit = data => {

        const bookingData = {
            serviceId: data.id,
            serviceName: data.name,
            serviceImage: data.image,
            servicePrice: data.price,
            providerName: data.providerName,
            providerEmail: data.providerEmail,
            customerName: user.displayName,
            customerEmail: user.email,
            date: data.date,
            instruction: data.instruction,
            serviceStatus: "pending"
        }

        axiosPublic.post(`/service-bookings`, bookingData)
            .then(res => {
                Swal.fire({
                    title: "Service Booking Successful",
                    text: `${data.name}, is now booked`,
                    icon: "success",
                    confirmButtonColor: "#87b303"
                });
                setisModalOpen(false);
            })
            .catch(error => {
                Swal.fire({
                    title: "Booking Addition Error",
                    text: `We encountered an error while trying to booked this service. Please try again letter. (Error: ${error.message})`,
                    icon: "error"
                });
            })
    };

    return (
        <>
            <Helmet><title>LushCare - Details</title></Helmet>
            <main>
                <section className="container mx-auto px-4">

                    <div className="p-8 mb-4 flex items-center gap-5 justify-center">

                        <div
                            className={`${isModalOpen ? " visible" : " invisible"
                                } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
                        >
                            <div
                                className={`${isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
                                    } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
                            >
                                <div className="w-full flex items-end p-4 justify-between border-b border-primaryColor">
                                    <h1 className="text-2xl font-bold">
                                        Update <span className="text-primaryColor">information</span>
                                    </h1>
                                    <RxCross1
                                        className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                                        onClick={() => setisModalOpen(false)}
                                    />
                                </div>

                                <form className="px-8 py-14" onSubmit={handleSubmit(onSubmit)}>

                                    <div className="">
                                        <div className="flex flex-col gap-[5px] w-full">
                                            <label className="text-lg ">Service Id</label>
                                            <input
                                                type="text"
                                                id="id"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("id")}
                                            />
                                            {errors.id && <span className="text-red-500 text-sm">{errors.id.message}</span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg ">Service Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("name")}
                                            />
                                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                        </div>

                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Service Image</label>
                                            <input
                                                type="url"
                                                id="image"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("image")}
                                            />
                                            {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Provider Name</label>
                                            <input
                                                type="text"
                                                id="providerName"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("providerName")}
                                            />
                                            {errors.providerName && <span className="text-red-500 text-sm">{errors.providerName.message}</span>}
                                        </div>

                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Provider Email</label>
                                            <input
                                                type="email"
                                                id="providerEmail"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("providerEmail")}
                                            />
                                            {errors.providerEmail && <span className="text-red-500 text-sm">{errors.providerEmail.message}</span>}
                                        </div>
                                    </div>{/* service provider */}

                                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">My Name</label>
                                            <input
                                                type="text"
                                                id="myName"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("myName")}
                                            />
                                            {errors.myName && <span className="text-red-500 text-sm">{errors.myName.message}</span>}
                                        </div>

                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">My Email</label>
                                            <input
                                                type="email"
                                                id="myEmail"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("myEmail")}
                                            />
                                            {errors.myEmail && <span className="text-red-500 text-sm">{errors.myEmail.message}</span>}
                                        </div>
                                    </div>{/* current user */}

                                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Price</label>
                                            <input
                                                type="number"
                                                id="price"
                                                readOnly
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("price")}
                                            />
                                            {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                                        </div>

                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Select Date</label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("date", { required: "Date is required" })}
                                            />
                                            {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
                                        </div>
                                    </div>{/* price and date */}

                                    <div className="flex flex-col gap-[5px] w-full mt-10">
                                        <label className="text-[1rem] text-gray-700">Special Instruction</label>
                                        <textarea
                                            className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-primaryColor transition-colors focus:border-primaryColor duration-300"
                                            {...register("instruction", { required: "Service instruction is required" })}
                                        ></textarea>
                                        {errors.instruction && <span className="text-red-500 text-sm">{errors.instruction.message}</span>}
                                    </div>

                                    <div className="w-full flex items-center justify-center  mt-5">
                                        <button type="submit"
                                            className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-lg mt-[10px] w-max`}>
                                            Purchase Service
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>{/* modal */}

                    <div className="w-full lg:w-10/12 shadow-lg bg-white mx-auto">
                        <div className="grid grid-cols-12 w-full items-center bg-primaryColor text-white">
                            <div className="grid col-span-full lg:col-span-5 justify-center gap-3 p-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={provider_image}
                                        alt={provider_name}
                                        className="w-[70px] h-[70px] object-cover rounded-full"
                                    />
                                    <div>
                                        <h1 className="text-lg">Name: {provider_name}</h1>
                                        <h1 className="text-lg">Email: {provider_email}</h1>
                                    </div>
                                </div>
                                <p className="text-2xl font-semibold text-center text-secondaryColor underline underline-offset-8 decoration-white"><span className="text-white">Service Area:</span> {area}</p>
                            </div>

                            <div className="grid col-span-full lg:col-span-7">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-64 cover"
                                />
                            </div>
                        </div>

                        <div className="w-full p-4 space-y-4">
                            <h2 className="font-semibold text-4xl text-primaryColor border-b-2 border-dashed border-primaryColor pb-2">{name}</h2>
                            <p>{description}</p>
                        </div>

                        <div className="flex items-center justify-between w-full px-4 py-3 bg-secondaryColor">
                            <p className="text-white text-lg">Price: ${price}</p>
                            <button onClick={() => setisModalOpen(true)} className="py-2 px-6 border border-white bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
};

export default ServiceDetails;