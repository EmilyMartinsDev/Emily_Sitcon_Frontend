import { useState } from "react";
import Listapaciente from "../../components/ListaPaciente";
import {
  Encasulador,
  Cabecalho,
  Input,
  Pesquisar,
  ControlePagina,
  NumeroPagina,
} from "./style";
import { FaSistrix } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useListarPacientesQuery } from "../../services/api";
import { formatarData } from "../../utils/formartarData";
const clientes = [
  {
    nome: "emily",
    CPF: "123039",
    dataNasc: "string",
    id: 1,
    status: "ativo",
  },
  {
    nome: "emily",
    CPF: "123039",
    dataNasc: "string",
    id: 2,
    status: "ativo",
  },
  {
    nome: "emily",
    CPF: "123039",
    dataNasc: "string",
    id: 3,
    status: "ativo",
  },
  {
    nome: "emily",
    CPF: "123039",
    dataNasc: "string",
    id: 4,
    status: "ativo",
  },
  {
    nome: "emily",
    CPF: "123039",
    dataNasc: "string",
    id: 5,
    status: "ativo",
  },
  {
    nome: "caolina",
    CPF: "123039",
    dataNasc: "string",
    id: 6,
    status: "ativo",
  },
  {
    nome: "amrina",
    CPF: "123039",
    dataNasc: "string",
    id: 7,
    status: "ativo",
  },
  {
    nome: "joao",
    CPF: "123039",
    dataNasc: "string",
    id: 8,
    status: "ativo",
  },
];

export const Clientes = () => {
  const [find, setFind] = useState("");

  const [page, setPage] = useState(1); // Estado para a página atual
  const pageSize = 10; // Número de itens por página

  const { data: pacientes, isLoading, isError } = useListarPacientesQuery(page); // Passando a página como parâmetro

  const totalPages = Math.ceil(pacientes?.length || 1 / pageSize) || 0;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  }; // Passando parâmetros de paginação

  const Pacientes = () => {
    let filtrados = pacientes;
    if (find != undefined && filtrados) {
      filtrados = filtrados.filter(
        (c) => c.nome.toLowerCase().search(find.toLowerCase() || "") >= 0,
      );
      return filtrados;
    } else {
      return pacientes || [];
    }
  };
  if (Pacientes() === undefined) {
    return <></>;
  }

  return (
    <div className="container">
      <Pesquisar>
        <FaSistrix size={30} />
        <Input
          placeholder="Pesquisar"
          value={find}
          onChange={(e) => setFind(e.target.value)}
        />
      </Pesquisar>

      <Encasulador>
        <Cabecalho>
          <span>Paciente:</span>
          <span>Nascimento:</span>
          <span>CPF:</span>
          <span>Ações:</span>
        </Cabecalho>
        {Pacientes().map((c, i) => (
          <Listapaciente
            CPF={c.CPF}
            dataNasc={formatarData(c.dataNasc)}
            id={c.id}
            nome={c.nome}
            status={c.status}
            index={i + 1}
            key={c.id}
          />
        ))}
      </Encasulador>
      <ControlePagina>
        <button onClick={() => handlePageChange(page - 1)}>
          <FaAngleLeft size={30} color="#c4c4c4" />
        </button>
        {page <= 3 && (
          <>
            <NumeroPagina pageAtual={page} pageNumber={1}>
              1
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={2}>
              2
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={3}>
              3
            </NumeroPagina>
          </>
        )}
        {page > 3 ? (
          <>
            <NumeroPagina pageAtual={page} pageNumber={4}>
              4
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={5}>
              5
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={6}>
              6
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={7}>
              7
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={8}>
              8
            </NumeroPagina>
            <NumeroPagina pageAtual={page} pageNumber={9}>
              9
            </NumeroPagina>
          </>
        ) : (
          <NumeroPagina pageAtual={0}>...</NumeroPagina>
        )}
        <NumeroPagina pageAtual={page} pageNumber={10}>
          10
        </NumeroPagina>
        <button onClick={() => handlePageChange(page + 1)}>
          <FaAngleRight size={30} color="#c4c4c4" />
        </button>
      </ControlePagina>
    </div>
  );
};
