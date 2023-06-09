import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product, ProductsState } from "../Interfaces";
import { getProducts } from "../Requests/Products/api";
import {
  Border,
  Margin,
  ProductHeader,
  ProductList,
  ProductListItem,
  ProductListItemHeader,
  ProductName,
  ProductPrice,
  StyledButtonBuyCourse,
  SubTitle,
  Title,
} from "../StyledComponents";
import {
  ListProductsRegistred,
  back,
  buyCourse,
  product,
} from "../pt-BR";
import { formatCurrency } from "../utils/currency/currency";

function BuyCourse() {
  const [state, setState] = useState<ProductsState>({ products: [] });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const products = await getProducts();
      setState({ products });
    }
    fetchData();
  }, []);

  const handleProductClick = (product: Product) => {
    const saleData = JSON.stringify({ product });
    localStorage.setItem("saleData", saleData);
    navigate("/checkout");
  };
  return (
    <>
      <Border>
        <Title>
          <span>{buyCourse}</span>
        </Title>
        <SubTitle>
          <h3>{ListProductsRegistred}</h3>
        </SubTitle>
        <ProductList>
          <ProductListItemHeader>
            <ProductHeader>
              <ProductName>{product}</ProductName>
              <ProductPrice>Price</ProductPrice>
            </ProductHeader>
          </ProductListItemHeader>
          {state.products.map((product, index) => (
            <ProductListItem
              key={product.id}
              even={index % 2 === 0}
              onClick={() => handleProductClick(product)}
            >
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
            </ProductListItem>
          ))}
        </ProductList>
        <Link to="/home">
          <Margin>
            <StyledButtonBuyCourse>{back}</StyledButtonBuyCourse>
          </Margin>
        </Link>
      </Border>
    </>
  );
}

export default BuyCourse;
