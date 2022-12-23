import { useEffect, useState } from "react"
import styled from "styled-components"
import trophy from "../images/trophy.png"
import { LoadingBars } from "../constants/loading";
import { getRanking } from "../connections/connections";

export default function Ranking () {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        const promisse = getRanking()
        promisse.then(res => setData(res.data))
        promisse.catch(erro => console.log(erro.response.data))
    },[])

    return (
        <Container>
            <Title>
                <img src={trophy} alt="trophy icon"/>
                <TitleText>Ranking</TitleText>
            </Title>

            <ContainerLines>
                {data ? 
                    data.map((info, index) => <Line><span>{index+1}. {info.name}</span> - {info.linksCount} links - {info.visitCount} visualizações</Line> )
                : <div className="load">
                    <LoadingBars/>
                </div> }
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

    .load {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

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