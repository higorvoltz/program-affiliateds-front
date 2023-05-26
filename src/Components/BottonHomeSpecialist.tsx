import { StyledBottonHomeSpecialist } from "../StyledComponents/styles";
import { bottonHomeSpecialist, bottonHomeSpecialistValue } from "../pt-BR/contants";

export default function BottonHomeSpecialist(){
  return(
    <>
      <StyledBottonHomeSpecialist>
        <p>{bottonHomeSpecialistValue}</p>
        <button>
          <strong>{bottonHomeSpecialist}</strong>
        </button>
      </StyledBottonHomeSpecialist>
    </>
  )
}