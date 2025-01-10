import SectionTitle from "../../../components/SectionTitle";
import mailBox from "../../../assets/mail-box.png";
// react icons
import { AiOutlineMail } from "react-icons/ai";
import AOS from "aos";
import { useEffect } from "react";
const Newsletter = () => {

        useEffect(() => {
        AOS.init(
            {
                duration: 1600,
                once: true, 
            }
        );
        }, [])
    
    const newsForm = (e) => {
        e.preventDefault()
        console.log(e.target.elements.letter.value);
    }

    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="subscribe" secondTitle="now!"></SectionTitle>

                <div className="mb-20">
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
                        <div className="w-full sm:w-[80%] lg:w-[50%]" data-aos="fade-right">
                            <img src={mailBox} alt="image"
                                className="w-full" />
                        </div>

                        <div className="w-full lg:w-[50%]">
                            <div data-aos="zoom-in">

                            
                            <b className="sm:text-3xl text-primaryColor">For latest updates</b>
                            <p className="mt-3">Join our newest and get weekly updates on the
                                gardening, case studies and tips right
                                in your mailbox.</p>
                            </div>
                            <form className="mt-5" onSubmit={newsForm}>
                                <div className="relative" data-aos="zoom-in" >
                                    <input name="letter"
                                        placeholder="Email Address"
                                        className="w-full py-3 pr-4 pl-14 outline-none focus:ring-0 border rounded-none border-primaryColor" />
                                    <AiOutlineMail size={22} color="#7aa300"
                                        className="absolute top-2/4 transform translate-y-[-50%] left-3 text-primaryColor]" />
                                </div>

                                <button
                                    className="font-bold uppercase w-full py-3 rounded-none bg-primaryColor hover:bg-[#93b827] text-white mt-4 duration-300" data-aos="fade-up" data-aos-delay={200}>subscribe 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Newsletter;