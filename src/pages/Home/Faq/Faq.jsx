import AOS from "aos";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect } from "react";

const Faq = () => {
        useEffect(() => {
        AOS.init(
            {
                duration: 1600,
                once: true, 
            }
        );
        }, [])
    
    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="frequently asked" secondTitle="questions"></SectionTitle>

            <div className="mt-10 space-y-5" data-aos="fade-up">

                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={200}>
                    <input type="radio" name="my-accordion-2" defaultChecked/>
                    <div className="collapse-title text-xl text-white font-medium">Click to open this one and close others</div>
                    <div className="collapse-content text-white">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={400}>
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl text-white font-medium">Click to open this one and close others</div>
                    <div className="collapse-content text-white">
                        <p>hello</p>
                    </div>
                </div>                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={800}>
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl text-white font-medium">Click to open this one and close others</div>
                    <div className="collapse-content text-white">
                        <p>hello</p>
                    </div>
                </div>

                

            </div>
        </section>
    );
};

export default Faq;