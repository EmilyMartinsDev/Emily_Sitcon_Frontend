import { Route, Routes } from "react-router-dom";

import PaginaPacientes from "./pages/PaginaPacientes";
import Solicitacao from "./pages/Solicitacao";
import PaginaTodasConsultas from "./pages/PaginaTodasConsultas";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<PaginaPacientes />} />
    <Route path="/solicitacao/:id" element={<Solicitacao />} />
    <Route path="/pacientes" element={<PaginaTodasConsultas />} />
  </Routes>
);

export default Rotas;
