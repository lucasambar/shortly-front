import styled from "styled-components"
import shorts from "../images/shorts.png"

export default function Logo () {
    return (
        <Container>
            <div>
                <Texto>Shortly</Texto>
                <img src={shorts} alt="Logo"/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 8px;
    
    div {
        display: flex;
        gap: 8px;
    }
`
const Texto = styled.p`
    font-family: Lexend Deca;
    font-size: 64px;
    font-weight: 200;
    line-height: 80px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;

    display: block;
`