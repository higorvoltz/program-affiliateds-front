import React from "react";
import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents";
import { affiliatedDisplay, back } from "../pt-BR";

export default function Affiliateds() {
  return (
    <>
      <Border>
        <Title>
          <span>{affiliatedDisplay}</span>
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
