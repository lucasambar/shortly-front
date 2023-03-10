import axios from "axios";

const URL = "https://shortly-keub.onrender.com";

export const api = axios.create({ baseURL: URL });

const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;
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
    return api.get("/users/me")
}

export function deleteUrl (id) {
    return api.delete(`/urls/${id}`)
}

export function getRanking () {
    return api.get("/ranking")
}

export function redirect(param) {
    return api.get(`/urls/open/${param}`)
}