import axios from "axios";

export function signup (body) {
    return axios.post("https://shortly-keub.onrender.com/signup", body)
}

export function signin (body) {
    return axios.post("https://shortly-keub.onrender.com/signin", body)
}