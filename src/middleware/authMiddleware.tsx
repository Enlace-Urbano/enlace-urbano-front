import { useEffect } from "react";
import { useNavigate } from "react-router";
import jwt from 'jsonwebtoken';

const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, import.meta.env.SECRET)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const isAuthenticated = () => {
    //get token
    const token = localStorage.getItem('token')
    //validate token
    return token ? verifyToken(token) : false
}

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login')
        }
    }, [navigate])

    return isAuthenticated() ? <Component {...rest} /> : null
};

export default PrivateRoute
