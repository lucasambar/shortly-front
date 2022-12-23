import styled from "styled-components"
import trash from "../../images/trash.png"

export default function Url () {
    return (
        <Container>
            <Infos>
                <Text>Link</Text>
                <Text>Shorten</Text>
                <Text>Quantidade de visitantes: 123</Text>
            </Infos>
            <Delete>
                <img src={trash} alt="delete icon"/>
            </Delete>
        </Container>
    )
}

const Container = styled.div`
    height: 62px;
    width: 1020px;
    border-radius: 12px;

    display: flex;
`
const Infos = styled.div`
    height: 62px;
    width: 887px;
    background-color: #80CC74;
    border-radius: 12px 0 0 12px;

    padding-left: 20px;
    padding-right: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Delete = styled.div`
    height: 62px;
    width: 133px;
    border-radius: 0 12px 12px 0;
    box-shadow: 0px 4px 24px 0px #78B1591F;
    
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`
const Text = styled.p`
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;

    display: block;
    height: 18px;
    max-width: 210px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`