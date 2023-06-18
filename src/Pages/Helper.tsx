import { Link } from "react-router-dom";
import {
  Border,
  Margin,
  StyledButtonBuyCourse,
  Title,
} from "../StyledComponents/styles";
import { back, helper } from "../pt-BR/contants";

export default function Helper() {
  return (
    <>
      <Border>
        <Title>
          <span>{helper}</span>
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
