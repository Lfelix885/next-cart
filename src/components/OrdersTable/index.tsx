import {
  ProfileImage,
  TableContainer,
  Title,
  Subtitle,
  TableContent,
  ProfileImageContainer,
  TextContainer,
  ButtonEditContainer,
} from "./styles";
import { profilePics } from "../../utils/profilepics";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { getData } from "../../services/apis";
import { OrdersTableTooltip } from "./OrdersTableTooltip";
import { toast } from "react-toastify";

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
  data?: any;
}

export function OrdersTable({ data }: any) {
  const [tableData, setTableData] = useState([]);
  const [tooltipShown, setTooltipShown] = useState(false);

  useEffect(() => {
    getData().then((res: []) => setTableData(res)).catch((err)=> {
      toast.error('Não foi possível carregar os dados', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });
  }, []);

  return (
    <>
      <TableContainer className="mx-3">
        {tableData?.map((x: any) => {
          return (
            <TableContent key={x.id} className="row">
              <ProfileImageContainer className="col-sm-2 d-flex justify-content-start align-items-center">
                {tooltipShown && (
                  <OrdersTableTooltip apresentante={x.apresentante} tipoProtocolo={x.tipoProtocolo} />
                )}
                <ProfileImage
                  className="img"
                  onMouseEnter={() => setTooltipShown(!tooltipShown)}
                >
                  <img
                    height={45}
                    width={45}
                    src={getRandomProfileImage(profilePics)}
                  ></img>
                </ProfileImage>
              </ProfileImageContainer>

              <TextContainer className="col align-items-center">
                <Title className="row justify-content-center">
                  Número do Protocolo: {x.numProtocolo}
                </Title>
                <Subtitle className="row justify-content-center">
                  Data de entrada: {x.dataEntrada}
                </Subtitle>
                <Subtitle className="row justify-content-center">
                  Data de Vencimento: {x.dataVencimento}
                </Subtitle>
              </TextContainer>

              <ButtonEditContainer className="col-sm-2">
                <Button className="btn1" types={"tableButton"}>
                  <i className="bi bi-pencil-square"></i>
                </Button>
              </ButtonEditContainer>
            </TableContent>
          );
        })}
      </TableContainer>
    </>
  );
}
