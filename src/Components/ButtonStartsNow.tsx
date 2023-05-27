import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents/styles";
import { buttonStartsNow } from "../pt-BR/contants";

export default function ButtonStartsNow(){
  return(
    <>
      <StyledButton>
        <Link to="/ajuda">
          <strong>{buttonStartsNow}</strong>
        </Link>
      </StyledButton>
    </>
  )
}