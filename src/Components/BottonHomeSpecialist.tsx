import React from "react";
import { Link } from "react-router-dom";
import { StyledBottonHomeSpecialist } from "../StyledComponents";
import {
  bottonHomeSpecialist,
  bottonHomeSpecialistValue,
} from "../pt-BR";

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
