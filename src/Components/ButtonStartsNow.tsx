import { StyledButton } from "../StyledComponents/styles";
import { buttonStartsNow } from "../pt-BR/contants";

export default function ButtonStartsNow(){
  return(
    <>
      <StyledButton>
        <strong>{buttonStartsNow}</strong>
      </StyledButton>
    </>
  )
}