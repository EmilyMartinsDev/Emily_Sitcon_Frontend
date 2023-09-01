import styled from "styled-components";
import { cores } from "../../styles";

export const Encasulador = styled.div`
  width: 100%;
  display: flex;
  max-height: 992px;
  overflow-y: scroll;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
`;
export const Cabecalho = styled.div`
  background: ${cores.azulEscuro};
  color: #fff;
  display: flex;
  border-top-radius: 16px;
  width: 100%;
  height: 62px;
  justify-content: space-between;
  span {
    margin: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 160px;
    width: 100%;
    font-size: 18px;
    line-height: 18px;
  }
`;
export const Input = styled.input`
  border: none;

  height: 62px;
  max-width: 490px;
  outline: none;
`;
export const Pesquisar = styled.div`
  svg {
    color: #c4c4c4;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    cursor: pointer;
  }

  width: 100%;
  display: flex;
  height: 62px;
  max-width: 490px;
  margin-bottom: 30px;
  justify-content: space-bettwen;
  align-items: center;
  height: 62px;
  margin-top: 32px;
  border-radius: 12px;
  background-color: #fff;
`;
