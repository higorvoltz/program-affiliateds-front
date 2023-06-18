import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents";
import { accelerator, back } from "../pt-BR";

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
