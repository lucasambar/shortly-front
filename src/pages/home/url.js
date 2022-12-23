import styled from "styled-components"
import trash from "../../images/trash.png"
import swal from 'sweetalert';
import { deleteUrl } from "../../connections/connections";

export default function Url ({data, atualizar}) {

    function deletar () {
        swal({
            title: "Tem certeza?",
            text: "Uma vez deletado, não será possível acessar esse Shorty :(",
            icon: "warning",
            buttons: {false: "Não, amo esse link!",
             true: "Sim, quero que ele exploda!"},
            dangerMode: true,
        }).then((res) => {if (res) {
            const promisse = deleteUrl(data.id)
            promisse.then(atualizar)
            promisse.catch(erro => console.log(erro.response.data))
        }})
    }

    return (
        <Container>
            <Infos>
                <Text>{data.url}</Text>
                <Text>{data.shortUrl}</Text>
                <Text>Quantidade de visitantes: {data.visitCount}</Text>
            </Infos>
            <Delete onClick={deletar}>
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
    width: 210px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`