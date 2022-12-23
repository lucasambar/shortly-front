import styled from "styled-components"
import trophy from "../images/trophy.png"

export default function Ranking () {
    return (
        <Container>
            <Title>
                <img src={trophy} alt="trophy icon"/>
                <TitleText>Ranking</TitleText>
            </Title>

            <ContainerLines>
                <Line><span>1. Fulaninha</span> - 32 links - 1.703.584 visualizações</Line>
            </ContainerLines>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
`
const Title = styled.div`
    width: 100%;
        
    display: flex;
    gap: 10px;
    justify-content: center;

`
const TitleText = styled.p`
    font-family: Lexend Deca;
    font-size: 36px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
`
const ContainerLines = styled.div`
    height: 241px;
    width: 1017px;
    border-radius: 12px;
    border: 1px solid #78B15940;

    padding: 20px 40px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    overflow-y: scroll;

    &&::-webkit-scrollbar {
        height: 230px;
        width: 10px;
        border-radius: 12px;               /* width of the entire scrollbar */
    }

    &&::-webkit-scrollbar-track {
        background: #fff;        /* color of the tracking area */
    }

    &&::-webkit-scrollbar-thumb {
        background-color: #5D9040;    /* color of the scroll thumb */
        border-radius: 12px;       /* roundness of the scroll thumb */
        border: 3px solid orange;  /* creates padding around scroll thumb */
    }
`
const Line = styled.p`
    font-family: Lexend Deca;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    span {
        font-family: Lexend Deca;
        font-size: 22px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
    }


`