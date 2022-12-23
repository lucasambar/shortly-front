import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Logo from "../../components/logo"
import Ranking from "../../components/ranking"
import Topo from "../../components/topo"

export default function DeslogadaPage () {
    const navigate = useNavigate()

    useEffect(()=>{
        const user = localStorage.getItem("user")
        if (user) navigate("/home")
    },[navigate])

    return (
        <>
            <Topo/>
            <Logo/>
            <Ranking/>
            <Text>
                <p onClick={()=>navigate("/cadastro")}>Crie sua conta para usar nosso serviço!</p>
            </Text>
        </>
    )
}

const Text = styled.div`
    font-family: Lexend Deca;
    font-size: 36px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;

    width: 100vw;
    display: flex;
    justify-content: center;

    margin-top: 25px;

    p {
        display: block;
        cursor: pointer;
    }
`