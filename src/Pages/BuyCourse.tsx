import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ProductsState } from "../Interfaces/interfaces";
import { getProducts } from "../Requests/Products/api";


function BuyCourse() {
  const [state, setState] = useState<ProductsState>({ products: [] });
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const products = await getProducts();
      setState({ products });
    }
    fetchData();
  }, []);
  return(
    <>
      <div>BuyCourse</div>
      <ul>
        {state.products.map(product => (
          <li key={product.id}>
            {product.name }-{product.price}-{product.comission_value}
          </li>
        ))}
      </ul>
      <Link to="/home">
        <p>Voltar</p>
      </Link>
    </>
  )
};

export default BuyCourse;
