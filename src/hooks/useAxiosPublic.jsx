import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://lush-care-server.vercel.app',
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;