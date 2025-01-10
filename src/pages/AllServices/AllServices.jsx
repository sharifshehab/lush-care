import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ServiceCard from "../shared/ServiceCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import Breadcrumb from "../shared/breadcrumb";

const AllServices = () => {
    const axiosPublic = useAxiosPublic();

    const { data: initialData = [], isPending } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const [search, setSearch] = useState('');
    const [inputFocus, setInputFocus] = useState(false);

    const [services, setServices] = useState(initialData);
    useEffect(() => {
        axiosPublic.get(`/services?search=${search}`)
            .then(res => setServices(res.data))
    }, [search]);

    if (isPending) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg text-primaryColor"></span>
        </div>
    }

    return (
        <>
            <Helmet><title>LushCare - All Services</title></Helmet>
            <main>
                <Breadcrumb></Breadcrumb>
                <section className="container mx-auto px-4">
                    <SectionTitle firstTitle="all" secondTitle="services"></SectionTitle>

                    <div className="relative w-full product_search_input my-5">
                        <input
                            className="px-4 py-2 border border-border w-full pl-10 outline-none focus:border-primaryColor"
                            placeholder="Search..." onChange={(e) => setSearch(e.target.value)}
                            onClick={() => setInputFocus(!inputFocus)} />
                        <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />

                        <div
                            className={`${inputFocus ? "opacity-100 h-auto translate-y-0 mt-2" : "translate-y-[-10px] opacity-0 h-0"} product_search_bar bg-white boxShadow w-full transition-all duration-500 overflow-hidden flex flex-col`}>

                            {
                                services?.map((service) => (
                                    <div key={service?._id}
                                        className="flex items-center justify-between w-full px-6 py-4 cursor-pointer border-b">
                                        <div className="flex items-center gap-3">
                                            <img src={service?.image}
                                                alt={service?.image}
                                                className="w-[30px] h-[30px] object-cover" />
                                            <h1 className="text-sm sm:text-lg">{service?.name}</h1>
                                        </div>
                                        <Link to={`/service-details/${service?._id}`}>
                                            <GoLinkExternal className="text-xl text-primaryColor" />
                                        </Link>
                                    </div>
                                ))
                            }

                            {
                                !services?.length && (
                                    <p className="text-lg py-3 text-primaryColor text-center">No search result found!</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="mt-12 mb-40 space-y-12">
                        {services.map(service => <ServiceCard key={service._id} service={service} serviceArea={true} maxCharacter={true}></ServiceCard>)}
                    </div>
                </section>
            </main>
        </>
    );
};

export default AllServices;