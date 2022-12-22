import { useState } from "react";
import Forms from "../../components/forms";
import Logo from "../../components/logo";
import Topo from "../../components/topo";

export default function Signin () {
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    
    function logar (event) {
        event.preventDefault();

        console.log(user)
    }

    return (
        <>
            <Topo/>
            <Logo/>
            <Forms onSubmit={logar}>
                <input placeholder="E-mail" value={user.email} type="email"
                onChange={(e)=> setUser({...user, email: e.target.value})}/>

                <input placeholder="Senha" value={user.password} type="password"
                onChange={(e)=> setUser({...user, password: e.target.value})}/>

                <button type="submit"><p>Entrar</p></button>
            </Forms>
        </>
    )
}