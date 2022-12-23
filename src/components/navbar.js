import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Navbar () {
    const navigate = useNavigate()
    const {name} = JSON.parse(localStorage.getItem("user"))

    function logout () {
        localStorage.removeItem("user")
        navigate("/")
    }

    return (
        <Container>
            <Hello>Seja bem-vindo, {name}!</Hello>
            <div>
                <Text onClick={()=>navigate("/home")}>Home</Text>
                <Text onClick={()=>navigate("/ranking")}>Ranking</Text>
                <Sair onClick={logout}>Sair</Sair>
            </div>
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    height: 75px;
    padding: 0 170px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    div {
        display: flex;
        gap: 22px;
    }
`
const Hello = styled.p`
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #5D9040;

    display: block;
`
const Text = styled(Hello)`
    color: #9C9C9C;
    cursor: pointer;
`
const Sair = styled(Text)`
    text-decoration: underline;
`