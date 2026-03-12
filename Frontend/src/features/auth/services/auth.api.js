// API Layer only going to communcate with backend only, there will no err will be shown here, all the error will be handle in the component level, this is just a wrapper around axios to make it easier to use and to handle the base URL and withCredentials option

import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
})


export async function login(username, password) {
    const response = await api.post('/login', {
        username, password
    })

    return response.data
}

export async function register(username, email, password) {
    const response = await api.post('/register', {
        username, email, password
    })

    return response.data
}

export async function getMe() {
    const response = await api.get('/get-me')

    return response.data
}