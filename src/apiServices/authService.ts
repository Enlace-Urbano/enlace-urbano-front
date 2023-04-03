import axios from 'axios';

type User = {
    username: string;
    password: string;
}

type Token = {
    token: string;
}

export const authService = {
    baseUrl: 'http://localhost:3000/api/v1/',
    login(user: User) {
        return axios.post(this.baseUrl.concat('auth/login'), user)
    },
    register(user: User) {
        return axios.post(this.baseUrl.concat('users/register'), user)
    },

}