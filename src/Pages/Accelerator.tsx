import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents/styles";
import { accelerator, back } from "../pt-BR/contants";

export default function Accelerator() {
  return (
    <>
      <Border>
        <Title>
          <span>{accelerator}</span>
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
