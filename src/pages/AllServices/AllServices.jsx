import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ServiceCard from "../shared/ServiceCard";

const AllServices = () => {
    const axiosPublic = useAxiosPublic();

    const { data: services = [], isPending } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        } 
    });
    
    return (
        <section className="container mx-auto px-4">
            <SectionTitle firstTitle="all" secondTitle="services"></SectionTitle>
            <div>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </section>
    );
};

export default AllServices;