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
export const ControlePagina = styled.div`
  max-width: 384px;
  height: 62px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 60px;
  border-radius: 12px;
  background-color: #fff;
  button {
    background: transparent;
    border: none;
    svg {
      cursor: pointer;
    }
  }
`;

type NumeroPagina = {
  pageAtual?: number;
  pageNumber?: number;
};

export const NumeroPagina = styled.span<NumeroPagina>`
  font-weight: bold;
  font-size: 18px;

  background-color: ${(props) =>
    props.pageAtual === props.pageNumber ? cores.azulEscuro : "#fff"};
  color: ${(props) =>
    props.pageAtual === props.pageNumber ? cores.branco : "#c4c4c4"};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
