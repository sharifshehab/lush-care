import { BiSolidLeaf } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

const ServiceCard = () => {
    return (
        <div className="shadow-md">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-[1.4rem] font-semibold">Service Name </h2>
                <div className="flex items-center gap-[5px]">
                    <BiSolidLeaf
                        className="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer" />
                    <FaFire className="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer" />
                </div>
            </div>
            <img
                src="https://img.freepik.com/free-photo/strawberry-dessert-gourmet-sweet-food-chocolate-indulgence-generative-ai_188544-8522.jpg?t=st=1722622233~exp=1722625833~hmac=92966e9ba3da795adaeb9da7587107d51eaff15f0424bf9628d286a28b2486b6&w=1060"
                alt="icecream"
                className=""
            />

            <div className="p-4">
                <p className="text-[1rem] text-gray-700">Service Description ( max 100 character)</p>

  

                <div className="mt-5 flex items-center justify-between w-full">
                    <h3 className="text-[1.4rem] font-semibold flex items-center gap-[4px]">
                        $13.90
                    </h3>

                    <button className="py-2 px-6 border border-gray-600 text-gray-700 rounded-md">View Detail</button>
                </div>
                <div className="provider flex items-center gap-4">
                    <div className="w-[50px] h-[50px] flex items-center
          justify-center text-[#fff] text-[1.3rem] rounded-full bg-[#f36f23]">
                        Img
                    </div>

                    <div className="">
                        <h2 className="font-[500] text-[1.2rem]">Service Provider Name</h2>
                    </div>
                </div> {/* provider */}

                <div className="flex items-center gap-[10px]">
                    <BsSend
                        className="p-[8px] lg:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]" />
                    <div>
                        <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] text-gray-800">Service Area
</h4>
                        <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">Alipur, Faridpur</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;