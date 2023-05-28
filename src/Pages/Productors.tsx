import { Link } from "react-router-dom";


function Productors(): JSX.Element {
  return (
    <div>
      <h1>Productors</h1>
      <Link to="/home">
        <p>Voltar</p>
      </Link>
    </div>
  );
}

export default Productors;
