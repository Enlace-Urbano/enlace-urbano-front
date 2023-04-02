import { useEffect } from "react";
import { useNavigate } from "react-router";

const isAuthenticated = () => {
    //get token
    const token = localStorage.getItem('token')
    //validate token

    return token ? true : false;
}

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate]);

    return isAuthenticated() ? <Component {...rest} /> : null;
};

export default PrivateRoute;
