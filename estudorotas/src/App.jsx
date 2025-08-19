import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Parana from "./Paginas/Parana";
import RioGrandedoSul from "./Paginas/RioGrandedoSul";
import SantaCatarina from "./Paginas/SantaCatarina";
import Acre from "./Paginas/Acre";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Para from "./Paginas/Para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";
import Alagoas from "./Paginas/Alagoas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import Maranhao from "./Paginas/Maranhao";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco  from "./Paginas/Pernambuco";
import Piaui  from "./Paginas/Piaui";
import RioGrandedoNorte  from "./Paginas/RioGrandedoNorte";
import Sergipe  from "./Paginas/Sergipe";
import Goias  from "./Paginas/Goias";
import MatoGrossodoSul  from "./Paginas/MatoGrossodoSul";
import DistritoFederal  from "./Paginas/DistritoFederal";

export default function App()
{
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/sp" element={<SaoPaulo/>}/>
        <Route path="/mg" element={<MinasGerais/>}/>
        <Route path="/rj" element={<RioDeJaneiro/>}/>
        <Route path="/es" element={<EspiritoSanto/>}/>
        <Route path="/pr" element={<Parana/>}/>
        <Route path="/rs" element={<RioGrandedoSul/>}/>
        <Route path="/sc" element={<SantaCatarina/>}/>
        <Route path="/ac" element={<Acre/>}/>
        <Route path="/ap" element={<Amapa/>}/>
        <Route path="/am" element={<Amazonas/>}/>
        <Route path="/pa" element={<Para/>}/>
        <Route path="/ro" element={<Rondonia/>}/>
        <Route path="/rr" element={<Roraima/>}/>
        <Route path="/to" element={<Tocantins/>}/>
        <Route path="/al" element={<Alagoas/>}/>
        <Route path="/ab" element={<Bahia/>}/>
        <Route path="/ce" element={<Ceara/>}/>
        <Route path="/ma" element={<Maranhao/>}/>
        <Route path="/pb" element={<Paraiba/>}/>
        <Route path="/pe" element={<Pernambuco/>}/>
        <Route path="/pi" element={<Piaui/>}/>
        <Route path="/rn" element={<RioGrandedoNorte/>}/>
        <Route path="/se" element={<Sergipe/>}/>
        <Route path="/go" element={<Goias/>}/>
        <Route path="/mt" element={<MatoGrossodoSul/>}/>
        <Route path="/df" element={<DistritoFederal/>}/>


    </Routes>
    </BrowserRouter> 
    );
}