import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import RegisterForm from "../../components/RegisterForm";
import { FormContainer, RegisterContainer } from "./styles";

function Register() {
  return (
    <RegisterContainer>
      <div className="ms-3">
        <PageTitle title="Formulário" subtitle="novos pedidos e edição" />
      </div>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
      <div className="me-3 d-flex justify-content-end">
        <Button className="me-3" types="cancel" title="Cancelar" />
        <Button types="submit" title="Enviar" />
      </div>
    </RegisterContainer>
  );
}

export default Register;
