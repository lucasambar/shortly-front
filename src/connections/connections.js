import axios from "axios";

export function signup (body) {
    return axios.post("https://shortly-keub.onrender.com/signup", body)
}