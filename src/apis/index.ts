import axios from "axios"


export const instance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:4000/api',
        headers: {
            'Content-Type': 'application/json',
            'x-restrict-key': 'tes'
        }
    });

    return instance;
}