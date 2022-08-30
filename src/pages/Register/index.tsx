import { FormContainer, RegisterContainer } from "./styles";
import { RegisterForm } from "../../components/RegisterForm";
import { PageTitle } from "../../components/PageTitle";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";

export default function Register() {
  return (
    <RegisterContainer>
      <div className="ms-3">
        <PageTitle title="Formulário" subtitle="novos pedidos e edição" />
      </div>
      <FormContainer>
        <RegisterForm pathForCancelBtn="../" />
      </FormContainer>
    </RegisterContainer>
  );
}
