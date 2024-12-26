import ServiceCard from "../../shared/ServiceCard";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const PopularServices = ({ services }) => {
    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="popular" secondTitle="service"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-6 mt-12">
                {services.map((service, idx) => <ServiceCard key={service._id} service={service} maxCharacter={true} animationDelay={idx * 250}></ServiceCard>)}
            </div>
            <div className="text-center mt-10">
                <Link to='/all-services'><Button></Button></Link>
            </div>
        </section>
    );
};

export default PopularServices;