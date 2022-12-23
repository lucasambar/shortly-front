import axios from "axios";

const URL = "https://shortly-keub.onrender.com";

export const api = axios.create({ baseURL: URL });
const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;
console.log(TOKEN)
api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function signup (body) {
    return api.post("/signup", body)
}

export function signin (body) {
    return api.post("/signin", body)
}

export function shorten (body) {
    return api.post("/urls/shorten", body)
}

export function myUrls () {
    return api.get("/urls/me")
}