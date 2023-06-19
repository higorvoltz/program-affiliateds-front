import React from "react";
import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents";
import { back, solutions } from "../pt-BR";

export default function Solutions() {
  return (
    <>
      <Border>
        <Title>
          <span>{solutions}</span>
        </Title>
        <Link to="/home">
          <Margin>
            <StyledButtonBuyCourse>{back}</StyledButtonBuyCourse>
          </Margin>
        </Link>
      </Border>
    </>
  );
}
