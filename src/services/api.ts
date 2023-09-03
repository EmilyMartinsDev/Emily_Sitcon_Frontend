import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { string } from "yup";
type Pacientes = {
  id: number;
  nome: string;
  CPF: string;
  dataNasc: string;
  status: string;
};
type Profissional = {
  id: number;
  nome: string;
  status: string;
};
type Solicitacao = {
  id: number;
  descricao: string;
  status: string;
};

export type ProfissionalAtende = {
  procedimento: {
    id: number;
    descricao: string;
    tipo_id: number;
    status: string;
  };
};

type Procedimento = {
  id: number;
  descricao: string;
  tipo_id: number;
  status: string;
};

type ListaProcedimento = {
  profissionalId: string;
  solicitacaoId: string;
};

type CadastroConsulta = {
  paciente_id: number;
  profissional_id: number;
  tipoSolicitacao_id: number;
  procedimentos_ids: number[];
  data: string;
  horario: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/",
  }),
  endpoints: (builder) => ({
    listarPacientes: builder.query<Pacientes[], number>({
      query: (page) => `pacientes?page=${page}`,
    }),
    listarPacienteID: builder.query<Pacientes, string>({
      query: (id) => `/paciente/${id}`,
    }),
    listarProfissional: builder.query<Profissional[], void>({
      query: () => "/profissional",
    }),
    listarSolicitacao: builder.query<Solicitacao[], void>({
      query: () => "/solicitacao",
    }),
    ListarProfissionalAtende: builder.query<ProfissionalAtende[], string>({
      query: (profissional_id) => `/profissionalAtende/${profissional_id}`,
    }),
    listarProcedimentos: builder.query<Procedimento[], ListaProcedimento>({
      query: ({ profissionalId, solicitacaoId }) =>
        `/procedimentos/${profissionalId}/${solicitacaoId}`,
    }),
    consulta: builder.mutation<CadastroConsulta, any>({
      query: (body) => ({
        url: "/consulta",
        body,
        method: "POST",
      }),
    }),
  }),
});
export default api;
export const {
  useListarPacientesQuery,
  useListarPacienteIDQuery,
  useListarProfissionalQuery,
  useListarSolicitacaoQuery,
  useListarProfissionalAtendeQuery,
  useListarProcedimentosQuery,
  useConsultaMutation,
} = api;
