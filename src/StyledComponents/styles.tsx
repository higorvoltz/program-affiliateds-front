import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledBottonHomeSpecialist = styled.div`
  height: 78px;
  background-color: #4EB41F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #FFFFFF;
    margin-right: 10px;
    margin-bottom: -1px;
  }

  button {
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
  }
}`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  gap: 5px;
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
  align-items: center;
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
`;

export const HeaderCheck = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  height: 68px;
  background-color: #77E86D;
  color: #ffffff;
`;
