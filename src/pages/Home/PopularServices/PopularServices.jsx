import ServiceCard from "../../shared/ServiceCard";

import SectionTitle from "../../../components/SectionTitle";
import { NavLink } from "react-router-dom";

const PopularServices = () => {
    return (
        <section className="container mx-auto px-4">

            <SectionTitle firstTitle="popular" secondTitle="service"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>

            <div className="text-center mt-10">
                <NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/all-services'><button className="py-2 px-6 border border-primaryColor">Show All</button></NavLink>
            </div>
        </section>
    );
};

export default PopularServices;