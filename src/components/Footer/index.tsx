import styled from "styled-components";
import { cores } from "../../styles";

const Encapsulador = styled.footer`
  width: 100%;
  height: 207px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${cores.azulClaro};
  span {
    display: inline-block;
    font-weight: normal;
    font-size: 18px;
    color: #00629b;
  }
`;

const Footer = () => {
  return (
    <Encapsulador>
      <span>Emily_Martins_Sitcon</span>
    </Encapsulador>
  );
};
export default Footer;
