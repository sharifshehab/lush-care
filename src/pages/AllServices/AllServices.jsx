import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../shared/ServiceCard";

const AllServices = () => {
    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="all" secondTitle="services"></SectionTitle>

            <div>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>
                <ServiceCard serviceArea={true}></ServiceCard>

            </div>
        </section>
    );
};

export default AllServices;