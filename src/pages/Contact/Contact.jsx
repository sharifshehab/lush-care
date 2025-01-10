import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import Breadcrumb from "../shared/breadcrumb";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <Helmet><title>LushCare - Contact Us</title></Helmet>
            <main>
                <Breadcrumb title={"Contact"}></Breadcrumb>
                <section className="container mx-auto px-4">
                    <SectionTitle firstTitle="get in" secondTitle="touch"></SectionTitle>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 boxShadow mt-14 mb-40">

                        {/* form area */}
                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-10 underline underline-offset-8 decoration-dashed decoration-gray-300">
                                <h1 className="text-primaryColor text-3xl font-semibold leading-[35px]">Send us a message</h1>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="text-lg dark:text-primaryColor">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 py-3"
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="Write your name"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                </div>

                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="text-lg dark:text-primaryColor">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 py-3"
                                        {...register("email", { required: "Email is required" })}
                                        placeholder="Write your email"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="text-lg dark:text-primaryColor">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 py-3"
                                        {...register("location", { required: "Location is required" })}
                                        placeholder="Write your location"
                                    />
                                    {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
                                </div>

                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="text-lg dark:text-primaryColor">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300 py-3"
                                        {...register("phone", { required: "Phone number is required" })}
                                        placeholder="Write your phone number"
                                    />
                                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-[5px] w-full mt-10">
                                <label className="text-lg dark:text-primaryColor">Message</label>
                                <textarea
                                    className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-primaryColor transition-colors focus:border-primaryColor duration-300 py-3"
                                    placeholder="Write your message"
                                    {...register("message", { required: "Message is required" })}
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                            </div>

                            <div className="w-full flex items-center justify-center mt-5">
                                <button type="submit"
                                    className="py-2 px-6 border border-primaryColor bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-300">
                                    Send
                                </button>
                            </div>
                        </form>

                        {/*  image  */}
                        <div className="h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                        </div>
                    </div>


                </section>
            </main>
        </>
    );
};

export default Contact;