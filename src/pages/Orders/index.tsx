import { OrdersTable } from "../../components/OrdersTable";
import { getData } from "../../services/apis";
import { PageTitle } from "../../components/PageTitle";
import { Button } from "../../components/Button";
import { OrdersContainer, PageTitleContainer } from "./styles";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";


const Orders: NextPage = () => {
  const router = useRouter();
  const [tableData,setTableData] = useState([]);

  useEffect(()=>{
    getData().then((res: []) => setTableData(res));   
  },[])

  return (
    <>
      <OrdersContainer>
        <PageTitleContainer className="mx-3">
          <PageTitle title="Pedidos" subtitle="últimos pedidos" />
          <Link href={"../Register"}>
            <span>
            <Button
              onClick={(e) => {
                e.preventDefault();
                return router.push("../Register");
              }}
              className="btn1"
              title={"Novo Pedido"}
              types={"button"}
            />
            </span>
          </Link>
        </PageTitleContainer>
        {/* <OrdersTable dados={tableData} />  */}
        <OrdersTable/> 

      </OrdersContainer>
    </>
  );
};
export default Orders;
