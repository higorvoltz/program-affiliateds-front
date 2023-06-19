import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductors } from "../Requests/Productors/api";
import {
  ProductorsState,
  AffiliatedsState,
  ClientsState,
  ProductorAffiliatedsState,
  ProductsState,
} from "../Interfaces";
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
} from "../StyledComponents";
import {
  adminArea,
  affiliatedsData,
  affiliatedv2,
  back,
  balance,
  clientsData,
  clientv2,
  creator,
  creatorsData,
  productorAffiliatedData,
  productorAffiliatedv2,
  productsData,
  productsHeader,
} from "../pt-BR";
import { getAffiliateds } from "../Requests/Affiliateds/api";
import { getClients } from "../Requests/Clients/api";
import { getProductorAffiliateds } from "../Requests/ProductorAffiliateds/api";
import { getProducts } from "../Requests/Products/api";
import { formatCurrency } from "../utils/currency/currency";

function AdminArea(): JSX.Element {
  const [product, setProduct] = useState<ProductorsState>({ productors: [] });
  const [affiliated, setAffiliated] = useState<AffiliatedsState>({ affiliateds: [] });
  const [client, setClient] = useState<ClientsState>({ clients: [] });
  const [productorAffiliated, setProductorAffiliated] = useState<ProductorAffiliatedsState>({
    productorAffiliateds: [],
  });
  const [statev5, setStatev5] = useState<ProductsState>({ products: [] });

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const productors = await getProductors();
      setProduct({ productors });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const affiliateds = await getAffiliateds();
      setAffiliated({ affiliateds });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const clients = await getClients();
      setClient({ clients });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const productorAffiliateds = await getProductorAffiliateds();
      setProductorAffiliated({ productorAffiliateds });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const products = await getProducts();
      setStatev5({ products });
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
          {product.productors.map((productor, index) => (
            <ProductListItem key={productor.id} even={index % 2 === 0}>
              id Produtor: {productor.id} | nome: {productor.name} | email: {productor.email} | Balance:
              {formatCurrency(productor.balance)}
            </ProductListItem>
          ))}
        </ProductorsList>
        <SubTitle>
          <h3>{affiliatedsData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{affiliatedv2}</ProductName>
              <ProductPrice>{balance}</ProductPrice>
            </ProductHeader>
          </ProductListItemHeader>
          {affiliated.affiliateds.map((affiliated, index) => (
            <ProductListItem key={affiliated.id} even={index % 2 === 0}>
              id Afiliado: {affiliated.id} | nome: {affiliated.name} | email: {affiliated.email} | Balance: $
              {formatCurrency(affiliated.balance)}
            </ProductListItem>
          ))}
        </ProductorsList>
        <SubTitle>
          <h3>{clientsData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{clientv2}</ProductName>
            </ProductHeader>
          </ProductListItemHeader>
          {client.clients.map((client, index) => (
            <ProductListItem key={client.id} even={index % 2 === 0}>
              nome: {client.name} | email: {client.email}
            </ProductListItem>
          ))}
        </ProductorsList>
        <SubTitle>
          <h3>{productorAffiliatedData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{productorAffiliatedv2}</ProductName>
            </ProductHeader>
          </ProductListItemHeader>
          {productorAffiliated.productorAffiliateds.map((productorAffiliated, index) => (
            <ProductListItem
              key={productorAffiliated.id}
              even={index % 2 === 0}
            >
              id Afiliado: {productorAffiliated.affiliated_id} cadastrado a
              id Produtor: {productorAffiliated.productor_id}
            </ProductListItem>
          ))}
        </ProductorsList>
        <SubTitle>
          <h3>{productsData}</h3>
        </SubTitle>
        <ProductorsList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{productsHeader}</ProductName>
            </ProductHeader>
          </ProductListItemHeader>
          {statev5.products.map((product, index) => (
            <ProductListItem key={product.id} even={index % 2 === 0}>
              id: {product.id} | nome: {product.name} | preço: {formatCurrency(product.price)} |
              comissão: {formatCurrency(product.comission_value)} | últimas vendas: {product.last_sales}
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
