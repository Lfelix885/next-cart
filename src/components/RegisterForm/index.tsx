import { Button } from "../Button";
import { FormLabel } from "./styles";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import { Bla } from "../OrdersTable";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm<FormProp>();
  const router = useRouter();
  const submitForm = (formData: FormProp) => console.log('form',formData)

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <FormLabel className="form-label mb-0">Protocolo</FormLabel>
          <input
            {...register("numProtocolo")}
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
              {...register("dataEntrada")}
              type="date"
              className="form-control mb-3"
              id="dataEntrada"
              name="dataEntrada"
            />
          </div>
          <div className="col">
            <FormLabel className="form-label mb-0">Data de Saída</FormLabel>
            <input
              {...register("dataVencimento")}
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
            {...register("apresentante")}
            type="text"
            className="form-control mb-3"
            id="apresentante"
            name="apresentante"
          />
        </div>

        <div>
          <FormLabel className="form-label mb-0">Tipo do Protocolo</FormLabel>
          <input
            {...register("tipoProtocolo")}
            type="text"
            className="form-control mb-3"
            id="tipoProtocolo"
            name="tipoProtocolo"
          />
        </div>

        <div className="me-3 d-flex justify-content-end">
          <Button
            onClick={(e) => {
              e.preventDefault();
              return router.push(pathForCancelBtn);
            }}
            className="me-3"
            types="cancel"
            title="Cancelar"
          />

          <Button types="submit" title="Enviar" />
        </div>
      </form>
    </>
  );
};
