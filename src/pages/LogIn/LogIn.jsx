import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { handleEmailLogin, setLoading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state ? location.state : '/';

    const onSubmit = async data => {
        try {
            const userCredential = await handleEmailLogin(data.email, data.password);
            const user = userCredential.user;
            reset();
            navigate(from, { replace: true });
        } catch (error) {
            Swal.fire({
                title: "Log-in Error",
                text: `We encountered an error while trying to log in. Please try again letter. (Error: ${error.message})`,
                icon: "error"
            });
        } finally {
            setLoading(false)
        }
    };

    return (
        <main>
            <SectionTitle firstTitle="user" secondTitle="login"></SectionTitle>
            <div className="flex items-center justify-center h-screen ">
                <form className="w-full lg:w-3/6 px-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg ">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Write your email"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("password", { required: "Password is required" })}
                                placeholder="Write your password"
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center  mt-5">
                        <button type="submit"
                            className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-lg mt-[10px] w-max`}>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LogIn;