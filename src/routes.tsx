import { Route, Routes } from "react-router-dom";

import PaginaPacientes from "./pages/PaginaPacientes";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<PaginaPacientes />} />
  </Routes>
);

export default Rotas;
