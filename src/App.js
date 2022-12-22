import { GlobalStyle } from "./constants/globalstyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeslogadaPage from "./pages/deslogada/deslogada.js";


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<DeslogadaPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
