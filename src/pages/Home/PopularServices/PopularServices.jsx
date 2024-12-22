import ServiceCard from "../../shared/ServiceCard";

import SectionTitle from "../../../components/SectionTitle";

const PopularServices = () => {
    return (
        <section className="container mx-auto px-4">

            <SectionTitle firstTitle="popular" secondTitle="service"></SectionTitle>

            <div className="grid grid-cols-2 gap-4">
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
           </div>
        </section>
    );
};

export default PopularServices;