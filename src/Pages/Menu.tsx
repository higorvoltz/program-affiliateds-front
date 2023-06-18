import { Link } from "react-router-dom";
import {
  Border,
  StyledButton1,
  StyledButton2,
  StyledButton3,
  StyledContainer3,
} from "../StyledComponents";

export default function Menu() {
  return (
    <>
      <Border>
        <StyledContainer3>
          <h1>Menu</h1>
          <Link to="/home">
            <p>x</p>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/home">
            <h1>Página Inicial</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/solucoes">
            <h1>Soluções</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/acelerador">
            <h1>Acelerador de Vendas</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/afiliados">
            <h1>Afiliados</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/academia">
            <h1>Academy</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/comprar">
            <h1>Comprar um curso</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/criadores">
            <h1>Criadores</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/central">
            <h1>Central de Ajuda</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledContainer3>
          <Link to="/adm">
            <h1>Área administrativa</h1>
          </Link>
        </StyledContainer3>
        <hr />
        <StyledButton1>
          <Link to="/afiliados">
            <p>Começar Gratuitamente</p>
          </Link>
        </StyledButton1>
        <StyledButton2>
          <Link to="/clientes">
            <p>Acessar minhas compras</p>
          </Link>
        </StyledButton2>
        <StyledButton3>
          <Link to="/afiliados">
            <p>Gerenciar meus negócios (afiliados)</p>
          </Link>
        </StyledButton3>
        <StyledButton3>
          <Link to="/criadores">
            <p>Gerenciar meus negócios (criadores)</p>
          </Link>
        </StyledButton3>
      </Border>
    </>
  );
}
