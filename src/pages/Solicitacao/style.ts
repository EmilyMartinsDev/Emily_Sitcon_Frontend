import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 460px;
  background: ${cores.azulClaro};
  height: 62px;
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 12px;
  margin-top: 8px;
  font-size: 18px;
  line-height: 18px;
  color: #333;
`;
type InputProps = {
  tamanho?: number;
};

export const Select = styled.select<InputProps>`
  height: 62px;
  background-color: #fff;
  width: ${(props) => (props.tamanho ? props.tamanho + "px" : "100%")};
  border: 0;
  border-radius: 12px;
  outline: none;
  appearance: #fff;
`;

export const Text = styled.span`
  font-weight: bold;
  line-height: 22px;
  font-size: 18px;
`;

export const BtnVoltar = styled(Link)`
  background: transparent;
  border: 1px solid ${cores.azulEscuro};
  border-radius: 12px;
  width: 93px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${cores.azulEscuro};
  text-decoration: none;
  font-weight: bold;
  line-height: 22px;
  margin-top: 30px;
  margin-bottom: 66px;
`;
export const CampoAlerta = styled.div`
  width: 100%;
  height: 62px;
  border-radius: 12px;
  background-color: #ffd6b0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
  }
  margin-top: 40px;
`;
export const InputGroupCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  padding: 4px;
  gap: 1%;
  & > div {
    display: flex;
    justify-content: space-between;
    height: 62px;

    align-items: center;
    background-color: #fff;
    width: 100%;
    border-radius: 12px;
    padding: 4px;
  }
  & ${Text} {
    jusify-content: start;
    margin-bottom: 8px;
  }

  .data {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
`;
export const GrupFlex = styled.div`
  display: flex;
  max-width: 100%;
  gap: 1%;
  select,
  input {
    display: inline-block;
    background-color: #fff;
    width: 480px;
  }
  justify-content: space-between;
`;
export const BtnSlavar = styled.button`
  width: 100%;
  max-width: 155px;
  height: 48px;
  color: #fff;
  margin-left: auto;
  display: flex;
  border: none;
  border-radius: 12px;
  background: ${cores.azulEscuro};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 32px;
`;
