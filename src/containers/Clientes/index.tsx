import { useState } from "react";
import Listapaciente from "../../components/ListaPaciente";
import { Encasulador, Cabecalho, Input, Pesquisar } from "./style";
import { FaSistrix } from "react-icons/fa";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useListarPacientesQuery } from "../../services/api";
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

  function formatarData(data: string): string {
    const dataObj = new Date(data);

    // Extrair componentes da data
    const ano = dataObj.getFullYear();
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0"); // +1 porque janeiro é 0
    const dia = dataObj.getDate().toString().padStart(2, "0");

    // Formatar como uma string no formato desejado (exemplo: "16/05/1997 00:00:00")
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
  }

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
      <div>
        <button onClick={() => handlePageChange(page - 1)}>Anterior</button>
        <span>Página {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Próxima</button>
      </div>
    </div>
  );
};
