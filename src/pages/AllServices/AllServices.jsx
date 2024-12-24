import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ServiceCard from "../shared/ServiceCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";

const AllServices = () => {
    const axiosPublic = useAxiosPublic();

    const { data: initialData = [], isPending } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        }
    });


/*   const productsData = [
        // {
        //     id: 1,
        //     name: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"",
        //     image: "https://i.ibb.co/d4jgmFW/01.png",
        //     productLink:""
        // },
        // {
        //     id: 2,
        //     name: "Mobile Phone Nokia 8210, Dual SIM, 4G",
        //     image: "https://i.ibb.co/fCpcnhM/02.png",
        //     productLink:""
        // },
        // {
        //     id: 3,
        //     name: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
        //     image: "https://i.ibb.co/2dYkwd3/03-1.png",
        //     productLink:""
        // },
        // {
        //     id: 4,
        //     name: "Headphones, Noise cancelling, Bluetooth 5.0",
        //     image: "https://i.ibb.co/f8xPk0G/04-1.png",
        //     productLink:""
        // },
        // {
        //     id: 5,
        //     name: "D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm",
        //     image: "https://i.ibb.co/dg7FmKY/05-1.png",
        //     productLink:""
        // },
    ] */




    /* ----------------------- */
    const [search, setSearch] = useState('');
    const [services, setServices] = useState(initialData);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    useEffect(() => {
        axiosPublic.get(`http://localhost:5000/services?search=${search}`)
            .then(res => setServices(res.data))
    }, [search]);
    /* ----------------------- */

    const [filteredData, setFilteredData] = useState(services)
    const [inputText, setInputText] = useState("")
    const [inputFocus, setInputFocus] = useState(true)

    useEffect(() => {
        const filtered = services?.filter((product) => {
            if (inputText === "") {
                return services
            } else {
                return product?.name.toLowerCase().includes(inputText)
            }
        })

        setFilteredData(filtered)

    }, [inputText]);


    function truncate(text, maxLength, ellipsis = "...") {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength - ellipsis?.length) + ellipsis;
    }

    /* ========================================================== */

    if (isPending) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg text-primaryColor"></span>
        </div>
    }

    return (
        <>
            <Helmet><title>LushCare - All Services</title></Helmet>
            <main>
                <section className="container mx-auto px-4">
                    <SectionTitle firstTitle="all" secondTitle="services"></SectionTitle>

                    {/* ---------------------- */}
                    <div className="relative w-full sm:w-[80%] product_search_input">
                        <input
                            className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                            placeholder="Search..." onChange={(e) => setInputText(e.target.value)}
                            onClick={() => setInputFocus(true)} />
                        <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />

                        <div
                            className={`${inputFocus ? "opacity-100 h-auto translate-y-0 mt-2" : "translate-y-[-10px] opacity-0 h-0"} product_search_bar bg-white boxShadow w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                            {
                                filteredData?.map((product) => (
                                    <div key={product?.id}
                                        className="flex items-center justify-between w-full px-6 py-4 hover:bg-gray-50 cursor-pointer rounded-md">
                                        <div className="flex items-center gap-[10px]">
                                            <img src={product?.image}
                                                alt="product/image"
                                                className="w-[30px] h-[30px] object-cover" />
                                            <h1 className="text-[0.9rem] sm:text-[1.1rem] text-gray-700 font-[400]">{truncate(product?.name, 60)}</h1>
                                        </div>
                                    <GoLinkExternal className="text-[1.3rem] text-gray-400" />
                                    </div>
                                ))
                            }

                            {
                                !filteredData?.length && (
                                    <p className="text-[0.9rem] py-3 text-[#a0a0a0] text-center">No search matched!</p>
                                )
                            }

                        </div>
                    </div>

                    {/* <form action="#" onSubmit={handleSearch}>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                className="grow"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="submit" className="flex items-center justify-center h-8 w-8 opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </label>
                    </form> */}
                    {/* ---------------- */}
                    <div className="mt-12 space-y-12">
                        {services.map(service => <ServiceCard key={service._id} service={service} serviceArea={true}></ServiceCard>)}
                    </div>
                </section>
            </main>
        </>
    );
};

export default AllServices;