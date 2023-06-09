import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledBottonHomeSpecialist = styled.div`
  height: 98px;
  background-color: #4EB41F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #FFFFFF;
    margin-left: 10px;
    margin-bottom: -10px;
    overflow: hidden; /* hide the overflow of the text */
    white-space: nowrap; /* prevent the text from wrapping */
    animation: typing 10s steps(32) infinite forwards; /* apply the animation */
  }

  button {
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 20px;
  }

  @keyframes typing {
    from {
      width: 0; /* start with zero width */
    }
    to {
      width: 100%; /* end with full width */
    }
  }
}`;

export const StyledSpan = styled.span`
  width: 100%; /* set the width to 100% */
  overflow: hidden; /* hide the overflow of the text */
  white-space: nowrap; /* prevent the text from wrapping */
  animation: typing 6s steps(32) infinite forwards; /* apply the animation */

  @keyframes typing {
    from {
      width: 0; /* start with zero width */
    }
    to {
      width: 100%; /* end with full width */
    }
  }
}`;


export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  gap: 5px;
  padding: 10px 10px;
`;

export const StyledContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #8B4513;

  p {
    color: #000000;
    font-weight: bold;
  }

  hr {
    border: none;
    border-top: 2px solid #000000;
  }
`;

export const StyledTextHome = styled.div`
  background-color: #8B4513;
  height: 278px;
  padding: 10px 10px;


  p {
    color: #ffffff;
    font-weight: bold;
    font-size: 32px;
    margin-left: 10px;
  }
`;

export const StyledText = styled.div`
  background-color: #8B4513;

  p {
    color: white;
    font-size: 16px;
  }

  :not(${ StyledTextHome }){
    background-color: #8B4513;
  }
`;

export const StyledImage = styled.img`
  height: 20px;
  width: 20px;
`;

export const StyledButton = styled.button`
  background-color: #F04E23;
  color: #ffffff;
  border: none;
  padding: 13px 21px;
  border-radius: 5px;
  height: 48px;
  width: 197px;
  margin-top: 15px;
  margin-left: 20px;
`;

export const StyledButton1 = styled.button`
  background-color: #F04E23;
  color: #ffffff;
  border: none;
  padding: 13px 21px;
  border-radius: 5px;
  height: 48px;
  width: 197px;
  margin-top: 15px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: left;
`;

export const StyledButtonBuyCourse = styled.button`
  background-color: #a54170;
  color: #000000;
  border: none;
  padding: 13px 21px;
  border-radius: 5px;
  height: 24px;
  width: 100px;
  margin-top: 15px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 2px #888;

  &:hover {
    background-color: #6e2c5a;
    color: #ffffff;
    box-shadow: 3px 3px #888;
  }
`;

export const StyledButtonBuyCoursev2 = styled.button`
  background-color: #a54170;
  color: #000000;
  border: none;
  padding: 13px 21px;
  border-radius: 5px;
  height: 24px;
  width: 100px;
  margin-top: 15px;
  margin-left: 100px;
  display: flex;
  justify-content: left;
  align-items: left;
  cursor: pointer;
  box-shadow: 2px 2px #888;

  &:hover {
    background-color: #6e2c5a;
    color: #ffffff;
    box-shadow: 3px 3px #888;
  }
`;

export const StyledButton2 = styled.button`
  background-color: #F04E23;
  color: #ffffff;
  border: none;
  padding: 13px 21px;
  border-radius: 5px;
  height: 48px;
  width: 197px;
  margin-top: 15px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton3 = styled.button`
  background-color: #F04E23;
  color: #ffffff;
  border: none;
  padding: 13px 21px;
  border-radius: 5px;
  height: 48px;
  width: 197px;
  margin-top: 15px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;

  h1 {
    color: #000000;
    font-size: 24px;
    margin: 10px;
  }

  p {
    color: #000000;
    font-size: 24px;
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export const ProductList = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 10px 20px;
`;

export const ProductorsList = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 10px 20px;
`;

export const ProductListItem = styled.li<{ even: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ even }) => (even ? '#f2f2f2': '#ffffff')};
  padding: 10px;
`;

export const ProductListItemHeader = styled.div`
  padding: 10px;
  background-color: #FA7878;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  flex: 1;
`;

export const ProductName = styled.span`
  flex: 1;
`;

export const ProductPrice = styled.span`
  margin-left: 8px;
`;

export const Title = styled.span`
  display: flex;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Titlev2 = styled.span`
  display: flex;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 20px;
  color: white;
`;

export const HeaderCheck = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  height: 68px;
  background-color: #77E86D;
  color: #ffffff;
  padding: 10px 10px;
`;

export const Border = styled.div`
${css`
  border: 1px solid black;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px 10px;
`}
`;

export const SubTitle = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Margin = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const MarginForm = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const MarginRight = styled.div`
  margin-right: 10px;
`;

export const MarginTop = styled.div`
  margin-top: 10px;
`;

export const SpeakSpecialist = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: red;
`;
