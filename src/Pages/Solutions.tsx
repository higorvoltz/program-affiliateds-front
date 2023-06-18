import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents/styles";
import { back, solutions } from "../pt-BR/contants";

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
