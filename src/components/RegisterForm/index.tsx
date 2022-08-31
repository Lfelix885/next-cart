import { Button } from "../Button";
import { ButtonFormContainer, FormLabel } from "./styles";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { sendData } from "../../services/apis";
import { toast } from "react-toastify";

interface RegisterFormProps {
  pathForCancelBtn: string;
}

type FormProp = {
  numProtocolo: string;
  dataEntrada: string;
  dataVencimento: string;
  apresentante: string;
  tipoProtocolo: string;
};

export const RegisterForm = ({ pathForCancelBtn }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProp>();
  const router = useRouter();

  const submitForm = (formData: FormProp) => {
    return sendData(formData)
      .then((res) => {
        reset(formData);
        toast.success("Dados cadastrados com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Não foi possível carregar os dados", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <FormLabel className="form-label mb-0">Protocolo</FormLabel>
          <input
            {...register("numProtocolo", { required: "O campo é obrigatório" })}
            type="text"
            className="form-control mb-3"
            id="numProtocolo"
            name="numProtocolo"
          />
        </div>

        <div className="row">
          <div className="col">
            <FormLabel className="form-label mb-0">Data de Entrada</FormLabel>
            <input
              {...register("dataEntrada", {
                required: "O campo é obrigatório",
              })}
              type="date"
              className="form-control mb-3"
              id="dataEntrada"
              name="dataEntrada"
            />
          </div>
          <div className="col">
            <FormLabel className="form-label mb-0">Data de Saída</FormLabel>
            <input
              {...register("dataVencimento", {
                required: "O campo é obrigatório",
              })}
              type="date"
              className="form-control mb-3"
              id="dataVencimento"
              name="dataVencimento"
            />
          </div>
        </div>

        <div>
          <FormLabel className="form-label mb-0">Apresentante</FormLabel>
          <input
            {...register("apresentante", { required: "O campo é obrigatório" })}
            type="text"
            className="form-control mb-3"
            id="apresentante"
            name="apresentante"
          />
        </div>

        <div>
          <FormLabel className="form-label mb-0">Tipo do Protocolo</FormLabel>
          <input
            {...register("tipoProtocolo", {
              required: "O campo é obrigatório",
            })}
            type="text"
            className="form-control mb-3"
            id="tipoProtocolo"
            name="tipoProtocolo"
          />
        </div>

        <ButtonFormContainer className="d-flex justify-content-end">
          <Button
            onClick={(e) => {
              e.preventDefault();
              return router.push(pathForCancelBtn);
            }}
            className="btn1 me-3"
            types="cancel"
            title="Cancelar"
          />

          <Button types="submit" title="Enviar" />
        </ButtonFormContainer>
      </form>
    </>
  );
};
