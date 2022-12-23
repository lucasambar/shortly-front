import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Forms from "../../components/forms";
import Logo from "../../components/logo";
import Topo from "../../components/topo";
import { signin } from "../../connections/connections";
import {Loading} from "../../constants/loading";

export default function Signin () {
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()

    function salvarUser (data) {
        localStorage.setItem("user", JSON.stringify(data))
        navigate("/home")
    }

    function logar (event) {
        event.preventDefault();
        setLoading(true)

        const promisse = signin(user)
        promisse.then(res => salvarUser(res.data))
        promisse.catch(erro => {setErro(erro.response.data); setLoading(false)})
    }

    return (
        <>
            <Topo/>
            <Logo/>
            <Forms onSubmit={logar}>
                <input placeholder="E-mail" value={user.email} type="email" disabled={loading}
                onChange={(e)=> setUser({...user, email: e.target.value})}/>

                <input placeholder="Senha" value={user.password} type="password" disabled={loading}
                onChange={(e)=> setUser({...user, password: e.target.value})}/>

                <span>{erro}</span>
                <button type="submit" disabled={loading}>
                    {loading ? <Loading/> : <p>Entrar</p>}
                </button>
            </Forms>
        </>
    )
}