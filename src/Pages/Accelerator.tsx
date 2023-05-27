import { Link } from "react-router-dom";

export default function Accelerator() {
  return (
    <>
      <div>Accelerator</div>
      <Link to="/home">
        <p>Voltar</p>
      </Link>
    </>
  );
}
