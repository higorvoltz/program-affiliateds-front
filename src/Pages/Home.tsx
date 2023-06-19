import React from "react";
import {
  textAffiliatedProgram,
  textDigitalProduct,
  textSet,
  textTool,
  textTransform,
} from "../pt-BR";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/logo.png";
import ticket from "../Images/ticket.png";
import {
  StyledContainer,
  StyledTextHome,
  StyledText,
  StyledImage,
  StyledContainer2,
  Border,
  MarginRight,
  Titlev2,
} from "../StyledComponents";
import ButtonStartsNow from "../Components/ButtonStartsNow";
import { Link } from "react-router-dom";
import BottonHomeSpecialist from "../Components/BottonHomeSpecialist";

export default function Home() {
  return (
    <>
      <Border>
        <BottonHomeSpecialist />
        <StyledContainer2>
          <img src={logo} alt="logo-program" />
          <p>{textAffiliatedProgram}</p>
          <MarginRight>
            <Link to="/menu">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </MarginRight>
        </StyledContainer2>
        <hr />
        <StyledTextHome>
          <Titlev2>
            <span>{textTransform}</span>
          </Titlev2>
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
      </Border>
    </>
  );
}
