import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Topo () {
    const navigate = useNavigate()

    return (
        <Container>
            <div>
                <Login onClick={() => navigate("/login")}>Entrar</Login>
                <Signup onClick={() => navigate("/cadastrato")}>Cadastrar-se</Signup>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 75px;
    padding-right: 170px;

    display: flex;
    justify-content: end;
    align-items: flex-end;

    div {
        display: flex;
        gap: 22px;
    }
`
const Login = styled.p`
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #5D9040;

    display: block;

    cursor: pointer;
`
const Signup = styled(Login)`
    color: #9C9C9C;
`