import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductors } from "../Requests/Productors/api";
import { ProductorsState, AffiliatedsState, ClientsState } from "../Interfaces";
import {
  Border,
  Margin,
  ProductHeader,
  ProductList,
  ProductListItem,
  ProductListItemHeader,
  ProductName,
  ProductPrice,
  ProductorsList,
  StyledButtonBuyCourse,
  SubTitle,
  Title,
} from "../StyledComponents/styles";
import {
  adminArea,
  affiliated,
  affiliatedsData,
  back,
  balance,
  client,
  clientsData,
  creator,
  creatorsData,
  product,
} from "../pt-BR/contants";
import { getAffiliateds } from "../Requests/Affiliateds/api";
import { getClients } from "../Requests/Clients/api";

function AdminArea(): JSX.Element {
  const [state, setState] = useState<ProductorsState>({ productors: [] });
  const [statev2, setStatev2] = useState<AffiliatedsState>({ affiliateds: [] });
  const [statev3, setStatev3] = useState<ClientsState>({ clients: [] });

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const productors = await getProductors();
      setState({ productors });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const affiliateds = await getAffiliateds();
      setStatev2({ affiliateds });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const clients = await getClients();
      setStatev3({ clients });
    }
    fetchData();
  }, []);
  return (
    <>
      <Border>
        <Title>
          <span>{adminArea}</span>
        </Title>
        <SubTitle>
          <h3>{creatorsData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{creator}</ProductName>
              <ProductPrice>{balance}</ProductPrice>
            </ProductHeader>
          </ProductListItemHeader>
          {state.productors.map((productor, index) => (
            <ProductListItem key={productor.id} even={index % 2 === 0}>
              {productor.name} ({productor.email})- Balance: $
              {productor.balance}
            </ProductListItem>
          ))}
        </ProductorsList>
        <SubTitle>
          <h3>{affiliatedsData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{affiliated}</ProductName>
              <ProductPrice>{balance}</ProductPrice>
            </ProductHeader>
          </ProductListItemHeader>
          {statev2.affiliateds.map((affiliated, index) => (
            <ProductListItem key={affiliated.id} even={index % 2 === 0}>
              {affiliated.name} ({affiliated.email})- Balance: $
              {affiliated.balance}
            </ProductListItem>
          ))}
        </ProductorsList>
        <SubTitle>
          <h3>{clientsData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{client}</ProductName>
            </ProductHeader>
          </ProductListItemHeader>
          {statev3.clients.map((client, index) => (
            <ProductListItem key={client.id} even={index % 2 === 0}>
              {client.name} ({client.email})
            </ProductListItem>
          ))}
        </ProductorsList>

        <Link to="/home">
          <Margin>
            <StyledButtonBuyCourse>{back}</StyledButtonBuyCourse>
          </Margin>
        </Link>
      </Border>
    </>
  );
}

export default AdminArea;
