import { FormLabel } from "./styles";

const RegisterForm = () => {
  return (
    <>
      <form>
        <div>
          <FormLabel className="form-label mb-0">Protocolo</FormLabel>
          <input type="text" className="form-control mb-3" id="protocolInput" />
        </div>

        <div className="row">
          <div className="col">
            <FormLabel className="form-label mb-0">Data de Entrada</FormLabel>
            <input type="date" className="form-control mb-3" id="entreeDate" />
          </div>
          <div className="col">
            <FormLabel className="form-label mb-0">Data de Saída</FormLabel>
            <input type="date" className="form-control mb-3" id="exitDate" />
          </div>
        </div>

        <div>
          <FormLabel className="form-label mb-0">Apresentante</FormLabel>
          <input type="text" className="form-control mb-3" id="presenterInput" />
        </div>
        <div>
          <FormLabel className="form-label mb-0">Tipo do Protocolo</FormLabel>
          <input type="text" className="form-control mb-3" id="protocolTypeInput" />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
