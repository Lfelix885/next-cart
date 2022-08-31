import {
  Arrow_Right,
  FirstSubtitle,
  SecondSubtitle,
  TooltipContainer,
  TooltipContent,
  TooltipHeader,
} from "./styles";

export function OrdersTableTooltip({apresentante, tipoProtocolo}:any) {
  return (
    <>
      <TooltipContainer>
        <TooltipHeader>
          <p className="row m-0">Informações Adicionais</p>
        </TooltipHeader>
        <TooltipContent>
          <Arrow_Right></Arrow_Right>
          <FirstSubtitle className="m-0">Apresentante: {apresentante}</FirstSubtitle>
          <SecondSubtitle className="m-0">Tipo de Protocolo: {tipoProtocolo}</SecondSubtitle>
        </TooltipContent>
      </TooltipContainer>
    </>
  );
}
