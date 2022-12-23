import { GlobalStyle } from "./constants/globalstyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeslogadaPage from "./pages/deslogada/deslogada.js";
import Signup from "./pages/signup/signup.js";
import Signin from "./pages/login/signin.js";
import HomePage from "./pages/home/homePage.js";
import PageRanking from "./pages/ranking/pageRanking.js";


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DeslogadaPage/>} />
          <Route path="/cadastro" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/ranking" element={<PageRanking/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
