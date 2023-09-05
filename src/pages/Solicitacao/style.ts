import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;

  &.data {
    justify-content: start;
    .dataGroup {
      width: 100%;
    }
    margin-top: 1rem;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${cores.azulEscuro};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 1024px;
  margin-top: 60px;
  padding: 20px;
  border: 1px solid ${cores.azulClaro};
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

// ...

export const IconContainer = styled.div`
  display: flex;
  height: 62px;
  width: 30rem;
  position: relative;
  border-radius: 12px;
  background: #fff;
  align-items: center;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "Selecione";
    left: 16px;
    text-align: center;
    color: #c4c4c4;
  }
  svg {
    position: absolute;
    right: 4px;
  }
`;

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const StyledRadio = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

// ...

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 8px;
  margin-top: 8px;
  color: ${cores.preto};
`;
export const InputWithIcon = styled.div`
  position: relative;
  width: 30rem;
  display: inline-block;

  input {
    width: 100%;
    height: 62px;
    border: 1px solid ${cores.azulClaro};
    border-radius: 8px;
    padding: 8px 36px 8px 8px;
    font-size: 16px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 62px;
  border: 1px solid ${cores.azulClaro};
  border-radius: 8px;
  padding: 8px 36px 8px 8px;
  font-size: 16px;
  &.paciente {
    background: ${cores.azulClaro};
    border-radius: 12px;
  }
  color: #333;
  outline: none;

  &:focus {
    border-color: ${cores.azulEscuro};
  }
`;
export const CalendarIcon = styled(FaRegCalendarAlt)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #c4c4c4;
  pointer-events: none;
`;
export const ClockIcon = styled(FaRegClock)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #c4c4c4;
  pointer-events: none; /* Impede que o ícone seja clicável */
`;
export const Select = styled.select`
  width: 100%;
  height: 62px;
  border: 1px solid ${cores.azulClaro};
  border-radius: 12px;
  padding: 8px;
  font-size: 16px;
  color: #333;
  outline: none;
`;
type visible = {
  isVisible?: boolean;
};
export const CheckboxContainer = styled.div<visible>`
  position: absolute;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  background-color: #fff; /* Fundo branco */
  width: 30rem;
  border: 1px solid ${cores.azulClaro};
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  z-index: 1;
`;
export const FormGroup = styled.div`
  margin-bottom: 8px;
  .dupla {
    width: 30rem;
  }
`;
export const CheckboxLabel = styled.label`
  font-size: 16px;
  margin-left: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  background-color: ${cores.azulEscuro};
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  width: 155px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${cores.azulEscuro};
  }
`;

export const BackLink = styled(Link)`
  margin-top: 20px;

  font-size: 18px;
  color: ${cores.azulEscuro};
  text-decoration: none;
  transition: background 0.2s;
  border: 1px solid ${cores.azulEscuro};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${cores.azulEscuro};
    color: #fff;
  }
  width: 93px;
  height: 46px;
`;

export const Alert = styled.div`
  background-color: #ffd6b0;
  color: #333;
  border-radius: 8px;
  padding: 12px;
  margin-top: 20px;
  font-size: 18px;
  span {
    font-weight: bold;
  }
  text-align: center;
  margin-bottom: 8px;
`;
