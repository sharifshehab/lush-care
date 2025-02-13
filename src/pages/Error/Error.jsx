import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
            <div className="boxShadow px-10 w-full h-screen py-16 flex flex-col justify-center"
                style={{
                    background: 'url("https://i.ibb.co/02DvRcV/404.jpg")', backgroundSize: "cover"
                }}>

                <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-white w-full lg:w-[50%]">Go Home , You’re
                    Lost!</h1>

            <button onClick={() => navigate('/')} className="py-3 px-8 w-max text-white bg-primaryColor hover:bg-[#96c900] mt-5 duration-300">BACK TO
                    HOME
                </button>
            </div >
    );
};

export default Error;