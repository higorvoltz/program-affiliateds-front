import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents";
import { academy, back } from "../pt-BR";

export default function Academy() {
  return (
    <>
      <Border>
        <Title>
          <span>{academy}</span>
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
