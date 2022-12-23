import Navbar from "../../components/navbar";
import Logo from  "../../components/logo";
import NewUrl from "./newUrl";
import UrlsContainer from "./urlsContainer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage () {
    const navigate = useNavigate()
    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) navigate("/")
    },[navigate])
    
    return (
        <>
            <Navbar/>
            <Logo/>
            <NewUrl/>
            <UrlsContainer/>
        </>       
    )
}