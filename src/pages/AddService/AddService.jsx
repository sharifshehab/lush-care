import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();


    const onSubmit = data => {

        const serviceData = {
            name: data.name,
            image: data.image,
            area: data.area,
            price: data.price,
            description: data.description,
            provider_name: user?.displayName,
            provider_email: user?.email,
            provider_image: user?.photoURL
        }

        axiosPublic.post('/services', serviceData)
            .then(res => {
                reset();
                queryClient.invalidateQueries(['services']);
                Swal.fire({
                    title: "Service Added Successfully",
                    text: `${data.name}, is now added to the services`,
                    icon: "success",
                    confirmButtonColor: "#87b303"
                });
            })
            .catch(error => {
                Swal.fire({
                    title: "Service Addition Error",
                    text: `We encountered an error while trying to add the service. Please try again letter. (Error: ${error.message})`,
                    icon: "error"
                });
            });
    };

    return (
        <>
            <Helmet><title>LushCare - Add Service</title></Helmet>
            <main>
                <section className="flex flex-col items-center justify-center space-y-10 mb-20">
                    <SectionTitle firstTitle="add" secondTitle="service"></SectionTitle>

                    <form className="w-full lg:w-3/6 px-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="text-lg dark:text-primaryColor">Service Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 p-3"
                                    {...register("name", { required: "Service Name is required" })}
                                    placeholder="Write service name"
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                            </div>

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="text-lg dark:text-primaryColor">Service Image</label>
                                <input
                                    type="url"
                                    id="image"
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 p-3"
                                    {...register("image", { required: "Service Image is required" })}
                                    placeholder="Past image url"
                                />
                                {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="text-lg dark:text-primaryColor">Service Area</label>
                                <input
                                    type="text"
                                    id="area"
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 p-3"
                                    {...register("area", { required: "Service area is required" })}
                                    placeholder="Write service area"
                                />
                                {errors.area && <span className="text-red-500 text-sm">{errors.area.message}</span>}
                            </div>

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="text-lg dark:text-primaryColor">Service Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 p-3"
                                    {...register("price", { required: "Service price is required" })}
                                    placeholder="Write service price"
                                />
                                {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-[5px] w-full mt-10">
                            <label className="text-lg dark:text-primaryColor">Service Description</label>
                            <textarea
                                className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-primaryColor transition-colors focus:border-primaryColor duration-300 p-3"
                                placeholder="Write service description"
                                {...register("description", { required: "Service description is required" })}
                            ></textarea>
                            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                        </div>

                        <div className="w-full flex items-center justify-center  mt-5">
                            <button type="submit"
                                className="py-2 px-6 border border-primaryColor bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-300 p-3">
                                Add Service
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default AddService;