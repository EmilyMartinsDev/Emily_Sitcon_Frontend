import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Pacientes = {
  id: number;
  nome: string;
  CPF: string;
  dataNasc: string;
  status: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/",
  }),
  endpoints: (builder) => ({
    listarPacientes: builder.query<Pacientes[], number>({
      query: (page) => `pacientes?page=${page}`,
    }),
  }),
});
export default api;
export const { useListarPacientesQuery } = api;
