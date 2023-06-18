import { Link } from "react-router-dom";
import { StyledButton } from "../StyledComponents";
import { buttonStartsNow } from "../pt-BR";

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