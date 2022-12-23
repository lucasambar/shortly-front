import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Forms from "../../components/forms";
import Logo from "../../components/logo";
import Topo from "../../components/topo";
import { signup } from "../../connections/connections";
import {Loading} from "../../constants/loading";

export default function Signup () {
    const [loading, setLoading] = useState(false)
    const[erro, setErro] = useState("")
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate()

    function cadastrar (event) {
        event.preventDefault()
        setLoading(true)

        const promisse = signup(user)
        promisse.then(res => navigate("/login"))
        promisse.catch(erro => {setErro(erro.response.data);setLoading(false)})
    }

    return (
        <>
            <Topo/>
            <Logo/>
            <Forms onSubmit={cadastrar}>
                <input placeholder="Nome" value={user.name} type="text" disabled={loading}
                onChange={(e) => setUser({...user, name: e.target.value})}/>

                <input placeholder="E-mail" value={user.email} type="email" disabled={loading}
                onChange={(e) => setUser({...user, email: e.target.value})}/>

                <input placeholder="Senha" value={user.password} type="password" disabled={loading}
                onChange={(e) => setUser({...user, password: e.target.value})}/>

                <input placeholder="Confirmação senha" value={user.confirmPassword} type="password" disabled={loading}
                onChange={(e) => setUser({...user, confirmPassword: e.target.value})}/>

                <span>{erro}</span>
                <button type="submit" disabled={loading}>
                    {loading ? <Loading/> :<p>Cadastrar</p>}
                </button>
            </Forms>
        </>
    )
}