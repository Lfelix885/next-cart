import styled from "styled-components";


export const TooltipContainer = styled.div`
  position:absolute;
  margin-left:-17.5%;
  width:200px;
  background-color: white;
  border-radius: 10px;
  font-size: 12px;

  @media (max-width: 800px) {
    display:none;
  }
`;

export const TooltipHeader = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: #50e485;
  height: 15px;
  font-weight: 700;

  p{
    margin-left: 10px !important;
  }
`;

export const TooltipContent = styled.div`
    padding:10px;
`;

export const FirstSubtitle = styled.p`
    font-weight: 300;
    margin-top: -25px !important;
    margin-left: -2px !important;
`;

export const SecondSubtitle = styled.p`
    font-weight: 300;
    margin-left: -2px !important;
    margin-bottom: -5px !important;
`;

export const Arrow_Right = styled.div`
z-index:999;
margin-left:105%;
width: 0; 
height: 0; 
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
border-left: 10px solid white;
`

