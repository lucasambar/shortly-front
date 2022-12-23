import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { redirect } from "../../connections/connections";

export default function OpenPage () {
    const {urlId} = useParams()
    console.log(urlId)
    useEffect(()=>{
        const promisse = redirect(urlId)
        promisse.then((res) => console.log(res.data))
        promisse.catch(erro => console.log(erro.response.data))
    },[urlId])
}