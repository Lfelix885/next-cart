import styled from "styled-components";

interface ButtonProps {
  typeOfButton: string;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => {
    switch (props.typeOfButton) {
      case "cancel":
        return "#2F3A58";
      case "tableButton":
        return "white";
      default:
        return "#50E485";
    }
  }};
  border: ${(props) =>
    props.typeOfButton == "cancel" ? "2px solid #50E485" : "none"};
  border-radius: 8px;
  padding: 6px 40px;
  color: ${(props) =>
    props.typeOfButton == "tableButton" ? "#50E485" : "white"};
  font-weight: 700;
`;
