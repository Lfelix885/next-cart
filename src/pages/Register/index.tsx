import { FormContainer, RegisterContainer } from "./styles";
import RegisterForm from "../../components/RegisterForm";
import { PageTitle } from "../../components/PageTitle";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";

export default function Register() {

  const router = useRouter();

  return (
    <RegisterContainer>
      <div className="ms-3">
        <PageTitle title="Formulário" subtitle="novos pedidos e edição" />
      </div>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
      <div className="me-3 d-flex justify-content-end">
        <Button onClick={(e) => {
          e.preventDefault();
          return router.push('../')
        }} className="me-3" types="cancel" title="Cancelar" />
        <Button types="submit" title="Enviar" />
      </div>
    </RegisterContainer>
  );
}
