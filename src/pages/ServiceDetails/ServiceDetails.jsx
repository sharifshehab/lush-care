import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";


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
            providerEmail: data.providerEmail,
            customerName: data.myName,
            customerEmail: data.myEmail,
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
                                            {...register("date", { required: "Date is required" } )}
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

                <div className="flex flex-col items-center gap-8">

                    <div className="w-3/12  relative bg-white shadow-md rounded-xl flex sm:flex-row flex-col items-center gap-5 p-4">
                        <div className="">
                            <img
                                src={provider_image}
                                alt={provider_name}
                                className="w-full sm:w-[100px] h-[100px] object-cover sm:rounded-full"
                            />
                        </div>
                        <div className="">
                            <h1 className=" text-[1.4rem] font-bold leading-[24px]">Name: {provider_name}</h1>
                            <span className="text-[0.9rem] text-gray-400">Email: {provider_email}</span>

                            <p className="text-gray-600 mt-3 text-[0.9rem]">Service Area: {area}</p>
                        </div>
                    </div>{/* service provider */}

                    <div className="w-[70%] shadow-lg bg-primaryColor rounded">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="flex w-full justify-between items-center p-4">
                            <div className="flex  items-center gap-4">
                                <div className=" flex flex-col items-center">
                                    <h2 className="font-semibold text-3xl text-white">{name}</h2>
                                </div>
                            </div>

                            <BsThreeDotsVertical className="text-text rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
                        </div>

                        <p className="text-text p-4 text-white">
                            <div className="flex flex-row ">
                                <button className="flex flex-row ">
                                    {" "}
                                    <BsEye className="text-2xl p-1" /> 50
                                </button>
                                <button className="flex flex-row ">
                                    <BiLike className="text-2xl p-1" /> 10
                                </button>
                            </div>
                            {description}
                        </p>

                        <div className="flex items-center justify-between w-full p-4 ">
                            <div className="flex flex-col items-center gap-4 ">
                                <div>
                                    {" "}
                                    <p className="text-white text-[0.9rem]">Price : ${price}</p>{" "}
                                </div>
                            </div>
                            <button onClick={() => setisModalOpen(true)} className="btn p-3 rounded border bg-black text-white hover:bg-blue-700 hover:text-white">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetails;