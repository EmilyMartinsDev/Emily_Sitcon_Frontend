import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

type ProfissionalAtende = {
  procedimento: {
    id: number;
    descricao: string;
    tipo_id: number;
    status: string;
  };
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
    ListarProfissonalAtende: builder.query<ProfissionalAtende[], void>({
      query: (body) => ({
        url: "/profissionalAtende",
        body,
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
  useListarProfissonalAtendeQuery,
} = api;
