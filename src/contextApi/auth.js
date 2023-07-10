import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        
    });

    // axios config
    axios.defaults.baseURL = "https://job-task-backend.vercel.app";

   

    useEffect(() => {
        const data = localStorage.getItem("auth");
        console.log(data)
        if (data) {
            const parsed = JSON.parse(data);
            
            setAuth({ ...auth, user: parsed.data });

        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };