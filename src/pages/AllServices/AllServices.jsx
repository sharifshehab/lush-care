import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ServiceCard from "../shared/ServiceCard";
import { Helmet } from "react-helmet-async";

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
        <>
            <Helmet><title>LushCare - All Services</title></Helmet>
            <main>
                <section className="container mx-auto px-4">
                    <SectionTitle firstTitle="all" secondTitle="services"></SectionTitle>
                    <div className="mt-12 space-y-12">
                        {services.map(service => <ServiceCard key={service._id} service={service} serviceArea={true}></ServiceCard>)}
                    </div>
                </section>
            </main>
        </>
    );
};

export default AllServices;