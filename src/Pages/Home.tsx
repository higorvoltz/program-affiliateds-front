import { textAffiliatedProgram, textDigitalProduct, textSet, textTool, textTransform } from "../pt-BR/contants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import ticket from '../Images/ticket.png';
import { StyledContainer, StyledTextHome, StyledText, StyledImage, StyledContainer2 } from "../StyledComponents/styles";
import ButtonStartsNow from "../Components/ButtonStartsNow";

export default function Home(){
  return(
    <>
      <StyledContainer2>
        <img src={logo} alt="logo-program" />
        <p>{ textAffiliatedProgram }</p>
        <FontAwesomeIcon icon={faBars} />
      </StyledContainer2>
      <hr />
      <StyledTextHome>
        <p>{ textTransform }</p>
        <StyledContainer>
          <StyledImage src={ticket} alt="ticket" />
          <StyledText>{textDigitalProduct}</StyledText>
        </StyledContainer>
        <StyledContainer>
          <StyledImage src={ticket} alt="ticket" />
          <StyledText>{textTool}</StyledText>
        </StyledContainer>
        <StyledContainer>
          <StyledImage src={ticket} alt="ticket" />
          <StyledText>{textSet}</StyledText>
        </StyledContainer>
      </StyledTextHome>
      <ButtonStartsNow />

    </>
  )
}