type ListaPaciente = {
  id: number;
  nome: string;
  dataNasc: string;
  CPF: string;
  status: string;
  index?: number;
};

import { Encasulador, Texto, LinkItem } from "./style";

const Listapaciente = ({
  id,
  nome,
  CPF,
  dataNasc,
  status,
  index = 1,
}: ListaPaciente) => {
  return (
    <>
      <Encasulador index={index}>
        <Texto>{nome}</Texto>
        <Texto>{dataNasc}</Texto>
        <Texto>{CPF}</Texto>
        <LinkItem to={`/solicitacao/${id}`}>
          <Texto>Prosseguir</Texto>
        </LinkItem>
      </Encasulador>
    </>
  );
};

export default Listapaciente;
