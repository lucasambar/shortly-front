import Navbar from "../../components/navbar";
import Logo from  "../../components/logo";
import NewUrl from "./newUrl";
import UrlsContainer from "./urlsContainer";
export default function HomePage () {
    return (
        <>
            <Navbar/>
            <Logo/>
            <NewUrl/>
            <UrlsContainer/>
        </>       
    )
}