import ServiceCard from "../../shared/ServiceCard";

import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";

const PopularServices = ({ services }) => {
    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="popular" secondTitle="service"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-6 mt-12">
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
            <div className="text-center mt-10">
                <Link to='/all-services'><button className="py-2 px-6 border border-primaryColor bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-300">Show All</button></Link>
            </div>
        </section>
    );
};

export default PopularServices;