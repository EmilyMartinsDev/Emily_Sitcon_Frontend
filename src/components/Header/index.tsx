import { HeaderContainer, ListagemSlicitação } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <ListagemSlicitação to="/solicitações">
          Listagem de solicitacao
        </ListagemSlicitação>
      </div>
    </HeaderContainer>
  );
};

export default Header;
