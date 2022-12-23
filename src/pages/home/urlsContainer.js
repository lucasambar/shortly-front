import styled from "styled-components"
import Url from "./url";

export default function UrlsContainer ({data}) {
    return (
        <Container>
           {data.map((data) => <Url data={data}/>)}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;

    margin-top: 50px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`