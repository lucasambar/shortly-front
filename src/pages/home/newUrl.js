import { useState } from "react"
import styled from "styled-components"
import { shorten } from "../../connections/connections"
import {Loading} from "../../constants/loading";

export default function NewUrl () {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState({
        placeholder: "Links que cabem no bolso",
        borda: "#78B15940"
    })

    function encurtar (event) {
        event.preventDefault()

        if (url === "") {setErro({
          placeholder: "Insira uma url válida!",
          borda: "#EA4F4F40",
        }); return}

        setLoading(true)

        const promisse = shorten({url})
        promisse.then(res => {setLoading(false); setUrl("")})
        promisse.catch(erro => setErro({placeholder:erro.res.data, borda:"#EA4F4F40"}))
    }

    return (
        <Container>
            <form onSubmit={encurtar}>
                <Input borda={erro.borda} type="url" disabled={loading}
                placeholder={erro.placeholder} value={url} 
                onChange={(e) => setUrl(e.target.value)}/>

                <Button type="submit" disabled={loading}>
                    {loading ? <Loading/> : "Encurtar link"}
                </Button>
            </form>
        </Container>

    )
}
const Container = styled.div`
    width: 100vw;

    display: flex;
    justify-content: center;

    margin-top: 50px;

    form {
        width: 1020px;
        display: flex;
        justify-content: space-between;
    }
`
const Input = styled.input`
    height: 60px;
    width: 769px;
    left: 248px;
    top: 333px;
    border-radius: 12px;
    border: 1px solid ${props => props.borda};

    padding: 0 20px;

    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #9C9C9C;
`
const Button = styled.button`
    height: 60px;
    width: 182px;
    left: 1086px;
    top: 333px;
    border-radius: 12px;
    border: none;
    background-color: #5D9040;

    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    color: #FFFFFF;

    cursor: pointer;
`