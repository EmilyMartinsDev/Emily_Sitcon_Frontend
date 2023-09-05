import { HeaderContainer, ListagemSlicitação } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <ListagemSlicitação to="/pacientes">
          Solicitações Clínicas
        </ListagemSlicitação>
        <ListagemSlicitação to="/pacientes">
          Listagem de solicitções
        </ListagemSlicitação>
      </div>
    </HeaderContainer>
  );
};

export default Header;
