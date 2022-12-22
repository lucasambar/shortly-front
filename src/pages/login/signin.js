import Forms from "../../components/forms";
import Logo from "../../components/logo";
import Topo from "../../components/topo";

export default function Signin () {
    return (
        <>
            <Topo/>
            <Logo/>
            <Forms>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/>
                <button><p>Entrar</p></button>
            </Forms>
        </>
    )
}