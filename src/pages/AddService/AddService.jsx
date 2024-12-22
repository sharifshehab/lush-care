import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

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
        <main>
            <div className="flex flex-col items-center justify-center h-screen space-y-10">
                <SectionTitle firstTitle="add" secondTitle="service"></SectionTitle>

                <form className="w-full lg:w-3/6 px-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg ">Service Name</label>
                            <input
                                type="text"
                                id="name"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
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
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
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
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
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
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("price", { required: "Service price is required" })}
                                placeholder="Write service price"
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full mt-10">
                        <label className="text-[1rem] text-gray-700">Service Description</label>
                        <textarea
                            className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-primary duration-300"
                            {...register("description", { required: "Service description is required" })}
                        ></textarea>
                    </div>


                    <div className="w-full flex items-center justify-center  mt-5">
                        <button type="submit"
                            className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-lg mt-[10px] w-max`}>
                            Add Service
                        </button>
                    </div>
                </form>



            </div>
        </main>
    );
};

export default AddService;