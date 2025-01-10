import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://lush-care-server.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const auth = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                auth?.handleLogOut()
                    .then(() => {
                        window.location.href = "/login";
                    })
                    .catch((error) => {
                        console.error(error)
                    });    
            }
            return Promise.reject(error);
        })
    }, [auth?.handleLogOut])

    return axiosSecure;
}

export default useAxiosSecure;