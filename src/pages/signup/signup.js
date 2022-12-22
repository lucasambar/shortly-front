import { useState } from "react";
import Forms from "../../components/forms";
import Logo from "../../components/logo";
import Topo from "../../components/topo";

export default function Signup () {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function cadastrar (event) {
        event.preventDefault()

        console.log(user)
    }

    return (
        <>
            <Topo/>
            <Logo/>
            <Forms onSubmit={cadastrar}>
                <input placeholder="Nome" value={user.name} type="text"
                onChange={(e) => setUser({...user, name: e.target.value})}/>

                <input placeholder="E-mail" value={user.email} type="email"
                onChange={(e) => setUser({...user, email: e.target.value})}/>

                <input placeholder="Senha" value={user.password} type="password"
                onChange={(e) => setUser({...user, password: e.target.value})}/>

                <input placeholder="Confirmação senha" value={user.confirmPassword} type="password"
                onChange={(e) => setUser({...user, confirmPassword: e.target.value})}/>

                <button type="submit"><p>Cadastrar</p></button>
            </Forms>
        </>
    )
}