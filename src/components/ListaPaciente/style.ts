import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

type Encapsulador = {
  index: number;
};

export const Encasulador = styled.div<Encapsulador>`
  background-color: ${(props) =>
    props.index % 2 === 0 ? cores.branco : cores.azulClaro};
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
  height: 62px;

  width: 100%;
`;
export const Texto = styled.span`
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 160px;
  width: 100%;
  font-size: 18px;
  line-height: 18px;
`;
export const LinkItem = styled(Link)`
  padding: 0 2rem;
  height: 46px;
  border-radius: 12px;
  max-width: 111px;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${cores.laranja};
`;
