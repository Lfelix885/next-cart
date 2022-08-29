import { OrdersTable } from "../../components/OrdersTable";
import { PageTitle } from "../../components/PageTitle";
import { Button } from "../../components/Button";
import { OrdersContainer } from "./styles";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Link from "next/link";

const tableMock = [
  {
    numProtocolo:'11111111',
    dataEntrada:'11/10/2020',
    dataVencimento:'23/03/2022',
    apresentante:'Leonardo',
    tipoProtocolo:'Válido',
    id:1
  },
  {
    numProtocolo:'2222222',
    dataEntrada:'11/10/2020',
    dataVencimento:'23/03/2022',
    apresentante:'Apolo',
    tipoProtocolo:'Válido',
    id:2
  },
  {
    numProtocolo:'333333',
    dataEntrada:'11/10/2020',
    dataVencimento:'23/03/2022',
    apresentante:'Sully',
    tipoProtocolo:'Válido',
    id:3
  },
  {
    numProtocolo:'444444',
    dataEntrada:'11/10/2020',
    dataVencimento:'23/03/2022',
    apresentante:'Charlie',
    tipoProtocolo:'Válido',
    id:4
  },
]

const Orders: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <OrdersContainer>
        <div className="mx-3 d-flex justify-content-between align-items-center">
          <PageTitle title="Pedidos" subtitle="últimos pedidos" />
          <Link href={"../Register"}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                return router.push("../Register");
              }}
              title={"Novo Pedido"}
              types={"button"}
            />
          </Link>
        </div>
        <OrdersTable data={tableMock}/>
      </OrdersContainer>
    </>
  );
};
export default Orders;
