import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pedido from "./pages/Pedido";
import Acompanhamento from "./pages/Acompanhamento/Acompanhamento"


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/pedido/:id" element={<Pedido/>}></Route>
                <Route path="/acompanhamento/:op" element={<Acompanhamento />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes
