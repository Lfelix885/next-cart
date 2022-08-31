import styled from "styled-components";

export const FormLabel = styled.label`
  font-weight: 700;
`;

export const ButtonFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;

    .btn1 {
      margin: 0 0 20px !important;
    }
  }
`;
