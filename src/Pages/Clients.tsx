import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents/styles";
import { back, clientArea } from "../pt-BR/contants";

export default function Clients() {
  return (
    <>
      <Border>
        <Title>
          <span>{clientArea}</span>
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
