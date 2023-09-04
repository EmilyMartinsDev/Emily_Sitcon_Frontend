import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid #3498db;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  max-width: 300px;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #3498db;
`;

const InfoLabel = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

const InfoValue = styled.div`
  font-size: 16px;
  color: #555;
`;
const InfoWrapper = styled.div`
  margin-bottom: 10px;

  &.datahora {
    display: flex;
    & > ${InfoValue} {
      margin-right: 8px;
    }
  }
`;

import { formatarData } from "../../utils/formartarData";
import { Procedimento } from "../../services/api";

type CardSolicitaReq = {
  nomePaciente: string;
  CPF: string;
  tipoSolicitacao: string;
  procedimentos: string[];
  data: string;
  hora: string;
};

const CardSolicita = ({
  nomePaciente,
  CPF,
  tipoSolicitacao,
  procedimentos,
  data,
  hora,
}: CardSolicitaReq) => {
  return (
    <>
      <CardContainer>
        <Title>Detalhes da Solicitação</Title>
        <InfoWrapper>
          <InfoLabel>Nome do Paciente:</InfoLabel>
          <InfoValue>{nomePaciente}</InfoValue>
        </InfoWrapper>

        <InfoWrapper>
          <InfoLabel>CPF:</InfoLabel>
          <InfoValue>{CPF}</InfoValue>
        </InfoWrapper>

        <InfoWrapper>
          <InfoLabel>Tipo de Solicitação:</InfoLabel>
          <InfoValue>{tipoSolicitacao}</InfoValue>
        </InfoWrapper>

        <InfoWrapper>
          <InfoLabel>Procedimento(s):</InfoLabel>
          {procedimentos.map((p) => (
            <InfoValue key={p}>{p}</InfoValue>
          ))}
        </InfoWrapper>
        <InfoWrapper className="datahora">
          <InfoLabel>Data e Hora:</InfoLabel>
          <InfoValue>{formatarData(data)}</InfoValue>
          <InfoValue>{hora}</InfoValue>
        </InfoWrapper>
      </CardContainer>
    </>
  );
};

export default CardSolicita;
