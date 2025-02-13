import { useContext } from "react";
import { AuthContext } from "../context/ProviderContext";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;