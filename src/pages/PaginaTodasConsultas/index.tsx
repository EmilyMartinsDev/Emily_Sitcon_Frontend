import React, { useEffect, useState } from "react";
import {
  useListaTodasConsultasQuery,
  useListaProcedimentoConsultaQuery,
} from "../../services/api";
import CardSolicita from "../../components/CardSolicita";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BackLink } from "../Solicitacao/style";
import { Consultas } from "../../services/api";
const ConsultaComProcedimentos = ({
  data,
  horario,
  id: clinicicaSolicitacao_id,
  paciente,
  profissional,
  tipoSolicitacao,
}: Consultas) => {
  const { data: procedimentos } = useListaProcedimentoConsultaQuery(
    clinicicaSolicitacao_id,
  );
  console.log(procedimentos);
  if (!procedimentos) {
    return <></>;
  }
  return (
    <CardSolicita
      key={clinicicaSolicitacao_id}
      CPF={paciente.CPF}
      nomePaciente={paciente.nome}
      data={data}
      hora={horario}
      procedimentos={procedimentos?.map(
        (procedimento) => procedimento.procedimento.descricao,
      )}
      tipoSolicitacao={tipoSolicitacao.descricao}
    />
  );
};

const PaginaTodasConsultas = () => {
  const { data: consultas } = useListaTodasConsultasQuery();

  return (
    <>
      <Header />
      <div className="container">
        <BackLink to="/">Voltar</BackLink>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {consultas?.map((c) => (
            <ConsultaComProcedimentos
              key={c.id}
              data={c.data}
              horario={c.horario}
              id={c.id}
              paciente={c.paciente}
              profissional={c.profissional}
              tipoSolicitacao={c.tipoSolicitacao}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaginaTodasConsultas;
