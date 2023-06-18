import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductors } from "../Requests/Productors/api";
import { ProductorsState, AffiliatedsState, ClientsState, ProductorAffiliatedsState } from "../Interfaces";
import {
  Border,
  Margin,
  ProductHeader,
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
  productorAffiliated,
  productorAffiliatedData,
} from "../pt-BR/contants";
import { getAffiliateds } from "../Requests/Affiliateds/api";
import { getClients } from "../Requests/Clients/api";
import { getProductorAffiliateds } from "../Requests/ProductorAffiliateds/api";

function AdminArea(): JSX.Element {
  const [state, setState] = useState<ProductorsState>({ productors: [] });
  const [statev2, setStatev2] = useState<AffiliatedsState>({ affiliateds: [] });
  const [statev3, setStatev3] = useState<ClientsState>({ clients: [] });
  const [statev4, setStatev4] = useState<ProductorAffiliatedsState>({ productorAffiliateds: [] });

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

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const productorAffiliateds = await getProductorAffiliateds();
      setStatev4({ productorAffiliateds });
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
              {productor.id} {productor.name} ({productor.email})- Balance: $
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
              {affiliated.id} {affiliated.name} ({affiliated.email})- Balance: $
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
        <SubTitle>
          <h3>{productorAffiliatedData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{productorAffiliated}</ProductName>
            </ProductHeader>
          </ProductListItemHeader>
          {statev4.productorAffiliateds.map((productorAffiliated, index) => (
            <ProductListItem key={productorAffiliated.id} even={index % 2 === 0}>
              idAfiliado: {productorAffiliated.affiliated_id} cadastrado a idProdutor: {productorAffiliated.productor_id}
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
