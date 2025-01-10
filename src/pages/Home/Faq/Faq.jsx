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

            <div className="mt-10 space-y-5">

                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl text-white font-medium">What services do you offer?</div>
                    <div className="collapse-content text-white">
                        <p>We offer a wide range of gardening services including lawn care, landscaping, edging and trimming, garden maintenance, and more. Whether you need regular upkeep or a complete garden makeover, we've got you covered.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={400}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-white font-medium">How can I schedule a service?</div>
                    <div className="collapse-content text-white">
                        <p>You can easily schedule a service by contacting us through our website, calling our customer service number, or sending an email. We’ll work with you to find a convenient time for your gardening needs.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={500}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-white font-medium">Do you provide one-time or recurring services?</div>
                    <div className="collapse-content text-white">
                        <p>We offer both one-time services and recurring maintenance plans. You can choose the option that best fits your gardening requirements and schedule.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={600}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-white font-medium">What areas do you serve?</div>
                    <div className="collapse-content text-white">
                        <p>We currently serve several areas, including Dhanmondi, Baridhara, and other parts of Dhaka. Please check our service area page for the most up-to-date information on our coverage.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primaryColor rounded-none border-x-4 border-gray-200" data-aos="fade-up" data-aos-delay={700}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-white font-medium">Can you help with garden design and installation?</div>
                    <div className="collapse-content text-white">
                        <p>Yes, our experienced team can assist with garden design and installation, helping you create the garden of your dreams. From planning to planting, we ensure every detail is taken care of.
                        </p>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Faq;