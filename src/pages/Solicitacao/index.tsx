import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaAngleDown } from "react-icons/fa";
import {
  useListarPacienteIDQuery,
  useListarProfissionalQuery,
  useListarSolicitacaoQuery,
  useListarProcedimentosQuery,
  useConsultaMutation,
} from "../../services/api";
import { formatarData } from "../../utils/formartarData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  CheckboxContainer,
  CheckboxLabel,
  ButtonContainer,
  IconContainer,
  StyledCheckbox,
  StyledRadio,
  SubmitButton,
  BackLink,
  FormRow,
  Alert,
  ClockIcon,
  CalendarIcon,
  InputWithIcon,
} from "./style";

const Solicitacao = () => {
  const { id } = useParams();
  const reverteData = (data: string) => {
    const [dia, mes, ano] = data.split("-");
    const novaData = `${ano}-${mes}-${dia}`;
    return novaData;
  };
  const stringToNumber = (array: Array<string>) => {
    const newL = array.map((v) => parseInt(v));
    return newL;
  };
  const { data } = useListarPacienteIDQuery(id!);
  const { data: Profissionais } = useListarProfissionalQuery();
  const { data: solicitacao } = useListarSolicitacaoQuery();
  const [selecaoMultipla, setSelecaoMultipla] = useState(false);
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

  const [consulta, { isSuccess, isError }] = useConsultaMutation();
  const form = useFormik({
    initialValues: {
      paciente_id: data?.id || "",
      profissional_id: "",
      tipoSolicitacao_id: "",
      procedimentos_ids: [] as string[],
      data: "",
      horario: "",
    },

    onSubmit: (values) => {
      console.log("Formulário enviado:", values); // Adicione essa linha
      console.log("Procedimentos:", procedimentos);

      // Verifique o valor de values.procedimentos_ids
      console.log("Procedimentos IDs:", values.procedimentos_ids);

      // Certifique-se de que values.procedimentos_ids seja um array válido e não vazio
      if (
        !Array.isArray(values.procedimentos_ids) ||
        values.procedimentos_ids.length === 0
      ) {
        console.log("Procedimentos IDs inválidos.");
        return;
      }

      // Verifique se stringToNumber está convertendo as strings corretamente
      const procedimentoIds = stringToNumber(values.procedimentos_ids);
      console.log("Procedimento IDs convertidos:", procedimentoIds);

      consulta({
        paciente_id: data?.id,
        profissional_id: parseInt(values.profissional_id),
        tipoSolicitacao_id: parseInt(values.tipoSolicitacao_id),
        procedimentos_ids: stringToNumber(values.procedimentos_ids),
        data: reverteData(values.data),
        horario: values.horario,
      })
        .unwrap()
        .then((response) => {
          console.log("Resposta da consulta:", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const { data: procedimentos } = useListarProcedimentosQuery({
    solicitacaoId: form.values.tipoSolicitacao_id,
    profissionalId: form.values.profissional_id,
  });
  // ...

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedProcedimentos = [...form.values.procedimentos_ids];

    if (checked) {
      updatedProcedimentos.push(value);
    } else {
      const index = updatedProcedimentos.indexOf(value);
      if (index !== -1) {
        updatedProcedimentos.splice(index, 1);
      }
    }

    form.setFieldValue("procedimentos_ids", updatedProcedimentos);
  };

  const campoIncorreto = (campo: string) => {
    const alterado = campo in form.touched;
    const erro = campo in form.errors;

    return alterado && erro;
  };

  const toggleCheckboxVisibility = () => {
    setIsCheckboxVisible(!isCheckboxVisible);
  };
  if (!data || !Profissionais || !solicitacao) {
    return <></>;
  }
  return (
    <>
      <Header />
      <div className="container">
        <BackLink to="/">Voltar</BackLink>
      </div>
      <Container>
        <Form onSubmit={form.handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label>Nome do Paciente:</Label>
              <Input
                name="paciente_id"
                value={data?.nome}
                onChange={form.handleChange}
                className="paciente"
                type="text"
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento:</Label>
              <Input
                className="paciente"
                value={formatarData(data?.dataNasc)}
                type="text"
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>CPF:</Label>
              <Input
                className="paciente"
                value={data?.CPF}
                type="text"
                disabled={true}
              />
            </FormGroup>
          </FormRow>
          <Alert>
            <span>Atenção!</span> Os Campos com * devem ser preenchidos
            obrigatoriamente.
          </Alert>
          <FormGroup>
            <Label>Profissional*</Label>
            <Select
              name="profissional_id"
              value={form.values.profissional_id}
              onChange={form.handleChange}
              className={campoIncorreto("profissional_id") ? "error" : ""}
            >
              {Profissionais?.map((p) => (
                <option key={p?.id} value={p?.id}>
                  {p?.nome}
                </option>
              ))}
            </Select>
          </FormGroup>
          <FormRow>
            <FormGroup>
              <div className="dupla">
                <Label>Tipo de solicitação*</Label>
                <Select
                  name="tipoSolicitacao_id"
                  value={form.values.tipoSolicitacao_id}
                  onChange={(e) => {
                    form.handleChange(e);
                    const selectedTipoSolicitacao = e.target.value;
                    setSelecaoMultipla(selectedTipoSolicitacao === "2");
                  }}
                  className={
                    campoIncorreto("tipoSolicitacao_id") ? "error" : ""
                  }
                >
                  {solicitacao?.map((s) => (
                    <option key={s?.id} value={s.id}>
                      {s?.descricao}
                    </option>
                  ))}
                </Select>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="dupla">
                <Label>Tipo de procedimento*</Label>
                <IconContainer onClick={toggleCheckboxVisibility}>
                  <FaAngleDown color="#c4c4c4" size={36} />
                </IconContainer>
                <CheckboxContainer isVisible={isCheckboxVisible}>
                  {selecaoMultipla ? (
                    <>
                      {procedimentos ? (
                        procedimentos.map((p) => (
                          <div key={p.id}>
                            <CheckboxLabel>
                              <StyledCheckbox
                                type="checkbox"
                                name="procedimentos_ids"
                                value={p.id.toString()}
                                onChange={(e) => handleChangeCheckbox(e)} // Usar o manipulador personalizado aqui
                                checked={form.values.procedimentos_ids.includes(
                                  p.id.toString(),
                                )}
                              />
                              {p.descricao}
                            </CheckboxLabel>
                          </div>
                        ))
                      ) : (
                        <h3>
                          Preencha os campos de profissional e solicitação
                        </h3>
                      )}
                    </>
                  ) : (
                    <>
                      {procedimentos &&
                      procedimentos.find((p) => p.descricao) ? (
                        procedimentos.map((p) => (
                          <div key={p.id}>
                            <label>
                              <StyledRadio
                                type="radio"
                                name="procedimentos_ids"
                                value={p.id}
                                onChange={form.handleChange}
                                checked={
                                  form.values.procedimentos_ids[0] ===
                                  p.id.toString()
                                }
                              />
                              {p.descricao}
                            </label>
                          </div>
                        ))
                      ) : (
                        <h3>
                          Preencha os campos de profissional e solicitação
                        </h3>
                      )}
                    </>
                  )}
                </CheckboxContainer>
              </div>
            </FormGroup>
          </FormRow>
          <FormRow className="data">
            <FormGroup className="dataGroup">
              <Label>Data:*</Label>
              <div className="data">
                <InputWithIcon>
                  <Input
                    name="data"
                    type="text"
                    placeholder="dd-mm-aaaa"
                    value={form.values.data}
                    onChange={form.handleChange}
                    className={campoIncorreto("data") ? "error" : ""}
                  />
                  <CalendarIcon size={30} color="#c4c4c4" />
                </InputWithIcon>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Hora:*</Label>
              <div className="data">
                <InputWithIcon>
                  <Input
                    name="horario"
                    type="text"
                    value={form.values.horario}
                    onChange={form.handleChange}
                    className={campoIncorreto("horario") ? "error" : ""}
                  />
                  <ClockIcon size={30} color="#c4c4c4" />
                </InputWithIcon>
              </div>
            </FormGroup>
          </FormRow>
          <ButtonContainer>
            <SubmitButton type="submit">Salvar</SubmitButton>
          </ButtonContainer>
        </Form>

        <Footer />
      </Container>
    </>
  );
};

export default Solicitacao;
