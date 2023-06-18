import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Border,
  HeaderCheck,
  Margin,
  StyledButtonBuyCourse,
} from "../StyledComponents/styles";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { back } from "../pt-BR/contants";

export default function Checkout() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const initialValues = {
    name: "",
    price: 0,
  };

  const validationSchema = yup.object({
    name: yup.string().required("product name is required"),
    price: yup.string().required("price is required"),
  });
  // TODO: incluir dados do cliente
  // TODO: incluit dados do produto
  // TODO: incluir método de busca por nome na api
  // TODO: incluir esse método no front e aqui no checkout usá-lo
  // para permitir a busca do productor/affiliated para gerar a venda
  // parametros de venda:
  // {
  //  "sale_item_id": 3,
  //  "productor_affiliated_id": 2,
  //  "transaction_type_id": 3,
  //  "seller_type": "Affiliated",
  //  "seller_id": 2
  //  }
  return (
    <>
      <Border>
        <HeaderCheck>Checkout</HeaderCheck>
        <div>Dados do cliente</div>
        <h2>Dados do Produto</h2>

        <div>
          <label htmlFor="offers-selection">Quem te indicou o produto?</label>
          <select
            id="offers-selection"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="">Escolha uma opção</option>
            <option value="yes">Ninguém</option>
            <option value="no">Uma pessoa</option>
          </select>
        </div>
        <button>Confirmar</button>
        <Link to="/home">
          <Margin>
            <StyledButtonBuyCourse>{back}</StyledButtonBuyCourse>
          </Margin>
        </Link>
      </Border>
    </>
  );
}
