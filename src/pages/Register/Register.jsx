import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { handleEmailRegister, handleGoogleSignIn, setNameAndPhoto } = useAuth();
    const navigate = useNavigate();
    
    let timerInterval;

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
            });
    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;

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
            .catch(error => {
                Swal.fire({
                    title: "Registration Error",
                    text: `We encountered an error while trying to register with gmail account. Please try again letter. (Error: ${error.message})`,
                    icon: "error"
                });
            })
    }

    return (
        <>
            <Helmet><title>LushCare - Registration</title></Helmet>
            <main>
                <div className="flex flex-col items-center justify-center h-screen space-y-10">
                    <SectionTitle firstTitle="user" secondTitle="register"></SectionTitle>

                    <form className="w-full lg:w-3/6 px-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="text-lg ">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
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
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
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
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
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
                                    className="peer border-gray-300 border-b outline-none focus:border-primaryColor w-full text-primaryColor transition-colors duration-300"
                                    {...register("password", { required: "password is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Password must contain at least one uppercase, one lowercase, one number and should be 8 character long" } })}
                                    placeholder="Write password"
                                />
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center  mt-5">
                            <button type="submit"
                                className="py-2 px-6 border border-primaryColor bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-300">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center flex-col space-y-5">
                        <button onClick={googleSignIn}
                            className="bg-[#3B9DF8] text-white py-[5px] pl-2 pr-4 flex items-center gap-3  hover:bg-blue-500 transition-all duration-200">
                            <div className="p-2 rounded-full bg-white">
                                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                                    alt="google logo"
                                    className="w-[23px]" />
                            </div>
                            Sign in with Google
                        </button>
                        <p className="">Already have an account? <span className="text-primaryColor underline underline-offset-4"> <Link to={'/login'}>Login here</Link></span></p>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Register;