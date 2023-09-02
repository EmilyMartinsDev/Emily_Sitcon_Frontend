import { Route, Routes } from "react-router-dom";

import PaginaPacientes from "./pages/PaginaPacientes";
import Solicitacao from "./pages/Solicitacao";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<PaginaPacientes />} />
    <Route path="/solicitacao/:id" element={<Solicitacao />} />
  </Routes>
);

export default Rotas;
