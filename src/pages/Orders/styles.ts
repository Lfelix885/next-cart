import styled from "styled-components";

export const OrdersContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;

  @media (max-width: 800px) {
    display:block;
    justify-content: flex-start !important;

    .btn1{
        width:100% !important;
    }
  }
`;
