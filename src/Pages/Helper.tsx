import { Link } from "react-router-dom";

export default function Helper() {
  return (
    <>
      <div>Helper</div>
      <Link to="/home">
        <p>Voltar</p>
      </Link>
    </>
  );
}
