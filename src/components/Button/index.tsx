import { StyledButton } from "./styles";

interface StyledButtonProps{
    title?:string;
    cb?: () => void;
    types: 'cancel' | 'submit' | 'button' | 'tableButton';
    className?:string;
    children?:JSX.Element;
}


function Button({title,cb, types, className, children}:StyledButtonProps){
    return(
        <StyledButton onClick={() => cb} className={className} typeOfButton={types}>{title || children}</StyledButton>
    )
}

export default Button;