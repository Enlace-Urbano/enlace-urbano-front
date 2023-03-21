import axios from 'axios';

type User {
    email: string;
    password: string;
}

export const authService = {
    baseUrl: 'http://localhost:3000/api/v1/auth/',
    login(user: User){
        return axios.post(this.baseUrl.concat('login'), user)
    },
    register(user: User) {
        return axios.post(this.baseUrl.concat('register'),user)

    }
}