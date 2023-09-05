import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: ${cores.azulEscuro};
  height: 107px;
  width: 100%;
  .container {
    display: flex;
    justify-content: end;
    align-items: center;

    & > a {
      margin-right: 16px;
    }
  }
`;
export const ListagemSlicitação = styled(Link)`
  background: transparent;
  border: 1px solid #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: #fff;
  width: 100%;
  max-width: 226px;
  height: 46px;
  border-radius: 12px;
`;
