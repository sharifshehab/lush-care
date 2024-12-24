import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";
import Swal from "sweetalert2";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageServices = () => {
    const { user } = useAuth();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [isModalOpen, setisModalOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    // TODO: use axios secure
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: myService = [], isPending, refetch } = useQuery({
        queryKey: ['services', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/services?email=${user.email}`);
            return res.data;
        }
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#87b303",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.delete(`/service/${id}`)
                    .then(res => {
                        console.log();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#87b303"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleModal = (id) => {
        setisModalOpen(true);
        axiosPublic.get(`/service/${id}`)
            .then(res => {
                setCurrentData(res.data);
            })
    }

    useEffect(() => {
        if (currentData) {
            setValue("name", currentData.name || "");
            setValue("image", currentData.image || "");
            setValue("area", currentData.area || "");
            setValue("price", currentData.price || "");
            setValue("description", currentData.description || "");
        }
    }, [currentData, setValue]);


    const onSubmit = data => {
        const updatedData = {
            name: data.name,
            image: data.image,
            area: data.area,
            price: data.price,
            description: data.description,
        }

        axiosPublic.patch(`/service/${currentData._id}`, updatedData)
            .then(res => {
                Swal.fire({
                    title: "Service Information Updated Successfully",
                    text: `${data.name}, is now updated`,
                    icon: "success",
                    confirmButtonColor: "#87b303"
                });
                refetch();
                setisModalOpen(false);
            })
            .catch(error => {
                Swal.fire({
                    title: "Service Addition Error",
                    text: `We encountered an error while trying to update the service. Please try again letter. (Error: ${error.message})`,
                    icon: "error"
                });
            })
    };

    if (isPending) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg text-primaryColor"></span>
        </div>
    }

    return (
        <>
            <Helmet><title>LushCare - Manage Services</title></Helmet>
            <main>
                <section className="container mx-auto min-h-screen">
                    <SectionTitle firstTitle="my" secondTitle="service"></SectionTitle>
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
                                    <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg ">Service Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("name", { required: "Service Name is required" })}
                                                placeholder="Write service name"
                                            />
                                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                        </div>

                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Service Image</label>
                                            <input
                                                type="url"
                                                id="image"
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("image", { required: "Service Image is required" })}
                                                placeholder="Past image url"
                                            />
                                            {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Service Area</label>
                                            <input
                                                type="text"
                                                id="area"
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("area", { required: "Service area is required" })}
                                                placeholder="Write service area"
                                            />
                                            {errors.area && <span className="text-red-500 text-sm">{errors.area.message}</span>}
                                        </div>

                                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                            <label className="text-lg text-gray-700">Service Price</label>
                                            <input
                                                type="number"
                                                id="price"
                                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                                {...register("price", { required: "Service price is required" })}
                                                placeholder="Write service price"
                                            />
                                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[5px] w-full mt-10">
                                        <label className="text-[1rem] text-gray-700">Service Description</label>
                                        <textarea
                                            className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-primaryColor transition-colors focus:border-primaryColor duration-300"
                                            {...register("description", { required: "Service description is required" })}
                                        ></textarea>
                                    </div>

                                    <div className="w-full flex items-center justify-center  mt-5">
                                        <button type="submit"
                                            className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-lg mt-[10px] w-max`}>
                                            Update Service
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Area</th>
                                    <th>Price</th>
                                    <th className="hidden md:table-cell">Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myService.length === 0 ? <tr><td className="text-center py-4" colSpan="6"><h2 className="text-lg text-primaryColor">no service is available</h2></td></tr>
                                    : myService.map(service => <TableRow key={service._id} service={service} handleDelete={handleDelete} handleModal={handleModal}></TableRow>)}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ManageServices;