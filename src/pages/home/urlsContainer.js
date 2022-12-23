import styled from "styled-components"
import Url from "./url";

export default function UrlsContainer () {
    return (
        <Container>
           <Url/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;

    margin-top: 50px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`