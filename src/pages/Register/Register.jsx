import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { handleEmailRegister, setNameAndPhoto } = useAuth();

    const navigate = useNavigate();

    const onSubmit = data => {


        handleEmailRegister(data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                setNameAndPhoto(data.name, data.photo)
                    .then(() => {
                        // Profile updated!
                        console.log('Name and photo successfully set.');
                    }).catch((error) => {
                        // An error occurred
                        Swal.fire({
                            title: "Profile Update Error",
                            text: `We encountered an error while trying to set the user name and photo.  (Error: ${error.message})`,
                            icon: "error"
                        });
                    });
                
                reset();

                let timerInterval;
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    html: "You'r being redirected to home page in <b>2</b> seconds.",
                    timer: 2000,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    },

                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        navigate('/');
                    }
                });

            })
            .catch((error) => {
                Swal.fire({
                    title: "Registration Error",
                    text: `We encountered an error while registration. Please try again letter. (Error: ${error.message})`,
                    icon: "error"
                });
                // ..
            });

    };

    return (
        <main>
            <SectionTitle firstTitle="user" secondTitle="register"></SectionTitle>
            <div className="flex items-center justify-center h-screen ">
                <form className="w-full lg:w-3/6 px-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg ">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("name", { required: "Name is required", minLength: { value: 5, message: "minimum character length is 5" } })}
                                placeholder="Write your name"
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Write your email"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg text-gray-700">Photo</label>
                            <input
                                type="url"
                                id="photo"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("photo", { required: "Photo is required" })}
                                placeholder="Past photo url"
                            />
                            {errors.photo && <span className="text-red-500 text-sm">{errors.photo.message}</span>}
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-lg text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-gray-400 transition-colors duration-300"
                                {...register("password", { required: "password is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Password must contain at least one uppercase, one lowercase, one number and should be 8 character long" } })}
                                placeholder="Write password"
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center  mt-5">
                        <button type="submit"
                            className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-lg mt-[10px] w-max`}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Register;