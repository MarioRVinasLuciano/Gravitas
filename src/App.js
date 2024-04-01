import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Contact from "./Pages/Contact";
import Soluciones from "./Pages/Soluciones";
import SobreNosotros from "./Pages/SobreNosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/gravitas" element={<Homepage/>} />
        <Route path="/gravitas" element={<Homepage/>} />
        <Route path="/gravitas/contact" element={<Contact/>} />
        <Route path="/gravitas/soluciones" element={<Soluciones/>} />
        <Route path="/gravitas/sobrenosotros" element={<SobreNosotros/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

