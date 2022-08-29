import { StyledButton } from "./styles";

interface StyledButtonProps{
    title?:string;
    onClick?: (event?:any) => ({});
    types: 'cancel' | 'submit' | 'button' | 'tableButton';
    className?:string;
    children?:JSX.Element;
}


export function Button({title,onClick, types, className, children}:StyledButtonProps){
    return(
        <StyledButton onClick={onClick} className={className} typeOfButton={types}>{title || children}</StyledButton>
    )
}

