import { HeaderContainer } from "./styles";
import Image from "next/image";
import LogoImage from "../../assets/img/Logotipo_NextCart.svg";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Image src={LogoImage} width="520" height="80" />
      </HeaderContainer>
    </>
  );
}

