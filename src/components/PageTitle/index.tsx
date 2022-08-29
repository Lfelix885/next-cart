import { Subtitle, Title, TitleContainer } from "./styles";

export function PageTitle({ title, subtitle }: any) {
  return (
    <>
      <TitleContainer>
        <Title className="me-2">{title} </Title><Subtitle> | {subtitle}</Subtitle>
      </TitleContainer>
    </>
  );
}