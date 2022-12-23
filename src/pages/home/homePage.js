import styled from "styled-components"

import Navbar from "../../components/navbar";
import Logo from  "../../components/logo";
import NewUrl from "./newUrl";
import UrlsContainer from "./urlsContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingBars } from "../../constants/loading";
import { myUrls } from "../../connections/connections";

export default function HomePage () {
    const navigate = useNavigate()
    const [data, setData] = useState(undefined)

    function atualizar () {
        const promisse = myUrls()
        promisse.then(res => setData(res.data.shortenedUrls))
        promisse.catch(erro => console.log(erro.response.data))
    }

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) navigate("/")
        
        atualizar()
    },[navigate])
    

    return (
        <>
            <Navbar/>
            <Logo/>
            <NewUrl/>
            {data ? <UrlsContainer/> : 
            <Div>
                <LoadingBars/>
            </Div>
            }
        </>       
    )
}

const Div = styled.div`
    width: 100vw;
    height: 100%;

    margin-top: 30px;

    display: flex;
    justify-content: center;
`