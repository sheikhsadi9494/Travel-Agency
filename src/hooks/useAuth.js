import { useContext } from "react"
import { AuthContext } from "../Context/AuhtPorvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;