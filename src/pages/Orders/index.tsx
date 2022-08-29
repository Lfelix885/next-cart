import Link from "next/link";
import type { NextPage } from "next";
import PageTitle from "../../components/PageTitle";
import { OrdersContainer } from "./styles";
import Button from "../../components/Button";
import OrdersTable from "../../components/OrdersTable";

const arr = [1,2,3,4,5]

const testes = arr.map(x => <OrdersTable/>)

const Orders: NextPage = () => {
  return (
    <>
      <OrdersContainer>
        <div className="mx-3 d-flex justify-content-between align-items-center">
          <PageTitle title="Pedidos" subtitle="últimos pedidos" />
          <Link href={"../Register"}>
            <Button title={"Novo Pedido"} types={"button"}/>
          </Link>
        </div>
        { testes }
      </OrdersContainer>
    </>
  );
};
export default Orders;
