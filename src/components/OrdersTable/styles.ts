import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: white;
  color: black;
  border-radius: 5px;
`;

export const TableContent = styled.div`
  margin: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0px;

  @media (max-width: 800px) {
    width: 100%;
    .img {
      margin: 0 auto;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonEditContainer = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center !important;

  @media (max-width: 800px) {
    .btn1 {
      justify-content: center !important;
      align-items: center !important;
      width: 100%;
      margin: 0 auto;
      display: block;
    }
  }
`;

export const ProfileImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  border: 3px solid #2f3a58;
  background-color: #50e485;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-right: 5px;
`;

export const Title = styled.p`
  font-weight: 700;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 300;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
