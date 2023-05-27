import { Link } from "react-router-dom";
import { StyledBottonHomeSpecialist } from "../StyledComponents/styles";
import {
  bottonHomeSpecialist,
  bottonHomeSpecialistValue,
} from "../pt-BR/contants";

export default function BottonHomeSpecialist() {
  return (
    <>
      <StyledBottonHomeSpecialist>
        <p>{bottonHomeSpecialistValue}</p>
        <Link to="/ajuda">
          <button>
            <strong>{bottonHomeSpecialist}</strong>
          </button>
        </Link>
      </StyledBottonHomeSpecialist>
    </>
  );
}
