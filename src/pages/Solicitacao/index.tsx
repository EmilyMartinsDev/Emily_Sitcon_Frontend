import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  BtnVoltar,
  Input,
  InputGroup,
  Text,
  CampoAlerta,
  InputGroupCadastro,
  Select,
  BtnSlavar,
  GrupFlex,
} from "./style";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import {
  useListarPacienteIDQuery,
  useListarProfissionalQuery,
  useListarSolicitacaoQuery,
} from "../../services/api";
import { useParams } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { formatarData } from "../../utils/formartarData";
const Solicitacao = () => {
  const { id } = useParams();

  const { data } = useListarPacienteIDQuery(id!);
  const { data: Profissonais } = useListarProfissionalQuery();
  const { data: solicitacao } = useListarSolicitacaoQuery();
  if (!data || !Profissonais || !solicitacao) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <BtnVoltar to="/">Voltar</BtnVoltar>
        <form action="">
          <InputGroup>
            <div>
              <Text>Nome do Paciente:</Text>
              <Input value={data?.nome} type="text" disabled={true} />
            </div>
            <div>
              <Text>Data de Nascimento:</Text>
              <Input
                value={formatarData(data?.dataNasc)}
                type="text"
                disabled={true}
              />
            </div>
            <div>
              <Text>CPF:</Text>
              <Input value={data?.CPF} type="text" disabled={true} />
            </div>
          </InputGroup>

          <CampoAlerta>
            <span>
              Atenção! Os Campos com * devem ser preechidos obrigatóriamente.
            </span>
          </CampoAlerta>
          <InputGroupCadastro>
            <Text>Profisional*</Text>
            <div>
              <Select>
                {Profissonais?.map((p) => (
                  <option key={p?.id} value={p?.id}>
                    {p?.nome}
                  </option>
                ))}
              </Select>
            </div>
          </InputGroupCadastro>
          <GrupFlex>
            <InputGroupCadastro>
              <Text>Tipo de solicitação*</Text>
              <Select>
                {solicitacao?.map((s) => (
                  <option key={s?.id} value={s.id}>
                    {s?.descricao}
                  </option>
                ))}
              </Select>
            </InputGroupCadastro>
            <InputGroupCadastro>
              <Text>Procedimentos:*</Text>
              <Select>
                <option value="">Profissional 1</option>
                <option value="">Profissional 1</option>
                <option value="">Profissional 1</option>
              </Select>
            </InputGroupCadastro>
          </GrupFlex>

          <GrupFlex>
            <InputGroupCadastro>
              <Text>Data:*</Text>

              <div className="data">
                <Input type="text" placeholder="dd-mm-aaaa" />
                <FaRegCalendarAlt size={30} color="#c4c4c4" />
              </div>
            </InputGroupCadastro>
            <InputGroupCadastro>
              <Text>Hora:*</Text>
              <div className="data">
                <Input type="text" />
                <FaRegClock size={30} color="#c4c4c4" />
              </div>
            </InputGroupCadastro>
          </GrupFlex>

          <BtnSlavar type="submit">Salvar</BtnSlavar>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Solicitacao;
