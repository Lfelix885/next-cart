import {
  ProfileImage,
  TableContainer,
  Title,
  Subtitle,
  TableContent,
} from "./styles";
import { profilePics } from "../../utils/profilepics";
import { Button } from "../Button";

function getRandomProfileImage(items: [string]) {
  return items[Math.floor(Math.random() * items.length)];
}

export interface Bla {
  id: number;
  numProtocolo: string;
  dataEntrada: string;
  dataVencimento: string;
  apresentante: string;
  tipoProtocolo: string;
}
interface TableProps {
  data: Bla[];
}

export function OrdersTable({ data }: TableProps) {
  return (
    <>
      <TableContainer>
        {data.map((x) => {
          return (
            <TableContent key={x.id} className="row">
              <div className="col-sm-2 d-flex justify-content-start align-items-center">
                <ProfileImage>
                  <img
                    height={45}
                    width={45}
                    src={getRandomProfileImage(profilePics)}
                  ></img>
                </ProfileImage>
              </div>

              <div className="col align-items-center">
                <Title className="row justify-content-center">
                  Número do Protocolo: {x.numProtocolo}
                </Title>
                <Subtitle className="row justify-content-center">
                  Data de entrada: {x.dataEntrada}
                </Subtitle>
                <Subtitle className="row justify-content-center">
                  Data de Vencimento: {x.dataVencimento}
                </Subtitle>
              </div>

              <div className="col-sm-2 d-flex justify-content-end">
                <Button types={"tableButton"}>
                  <i className="bi bi-pencil-square"></i>
                </Button>
              </div>
            </TableContent>
          );
        })}
      </TableContainer>
    </>
  );
}
