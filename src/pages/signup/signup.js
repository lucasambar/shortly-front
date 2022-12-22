import Forms from "../../components/forms";
import Logo from "../../components/logo";
import Topo from "../../components/topo";

export default function Signup () {
    return (
        <>
            <Topo/>
            <Logo/>
            <Forms>
                <input placeholder="Nome"/>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/>
                <input placeholder="Confirmação senha"/>
                <button><p>Cadastrar</p></button>
            </Forms>
        </>
    )
}