import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product, ProductsState } from "../Interfaces/interfaces";
import { getProducts } from "../Requests/Products/api";
import {
  ProductHeader,
  ProductList,
  ProductListItem,
  ProductListItemHeader,
  ProductName,
  ProductPrice,
  Title,
} from "../StyledComponents/styles";

function formatCurrency(value: number) {
  const remainingCents = value % 100;
  const currencyValue = (value - remainingCents) / 100;
  const currencyString = currencyValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  if (remainingCents === 0) {
    return currencyString;
  } else {
    const remainingCentsString = remainingCents.toString().padStart(2, "0");
    return `${currencyString.replace(/\s/g, "")} + 0,${remainingCentsString}`;
  }
}

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
      <Title>
        <span>Compre um produto digital</span>
      </Title>
      <h3>Lista de Produtos Cadastrados</h3>
      <ProductList>
        <ProductListItemHeader>
          <ProductHeader>
            <ProductName>Product</ProductName>
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
        <p>Voltar</p>
      </Link>
    </>
  );
};

export default BuyCourse;
