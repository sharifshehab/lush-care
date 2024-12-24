import React, { useEffect, useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Search = () => {


    const [search, setSearch] = useState([]);



    // console.log(inputText);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {



        
        axiosPublic.get(`/services?search=${search}`)
            .then(res => {
        
            setProductsData(res.data);
        })

    }, [search]);


    function truncate(text, maxLength, ellipsis = "...") {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength - ellipsis?.length) + ellipsis;
    }
    return (
        <div className="relative w-full sm:w-[80%] product_search_input">
            <input
                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                placeholder="Search..." onChange={(e) => setInputText(setSearch(e.target.value))}
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
    );
};

export default Search;