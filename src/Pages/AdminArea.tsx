import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getProductors } from '../Requests/Productors/api';
import { ProductorsState } from '../Interfaces/interfaces';


function AdminArea(): JSX.Element{
  const [state, setState] = useState<ProductorsState>({ productors: [] });

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const productors = await getProductors();
      setState({ productors });
    }
    fetchData();
  }, []);
  return(
    <>
      <h1>Admin Area</h1>
      <ul>
        {state.productors.map(productor => (
          <li key={productor.id}>
            {productor.name} ({productor.email})- Balance: ${productor.balance}
          </li>
        ))}
      </ul>
      <Link to="/home">
        <p>Voltar</p>
      </Link>
    </>
  )
}

export default AdminArea;