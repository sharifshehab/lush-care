import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ServiceCard from "../shared/ServiceCard";

const AllServices = () => {
    const axiosPublic = useAxiosPublic();

    const { data: services = [], isPending, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        } 
    });

    console.log('all', services);

    // axiosPublic.get('/services?limit=6')
    //     .then(res => {
    //     console.log('top six',res.data);
    // })


    
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