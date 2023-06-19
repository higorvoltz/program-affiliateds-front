import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Productor, ProductorsState } from "../Interfaces";
import axios from "axios";
import {
  back,
  comissionValue,
  createProduct,
  myDataProductor,
  productName,
  productPrice,
  productorId,
  productors,
  ranking,
  send,
} from "../pt-BR";
import {
  Border,
  Margin,
  MarginForm,
  StyledButtonBuyCourse,
  SubTitle,
  Title,
} from "../StyledComponents";

const validationSchema = yup.object({
  name: yup.string().required("product name is required"),
  price: yup.number().required("product price is required"),
  productor_id: yup.number().required("productor id is required"),
  comission_value: yup.number().required("comission value is required"),
  ranking: yup.number().required("ranking is required"),
});

function Productors(): JSX.Element {
  const initialValues = {
    name: "",
    price: 0,
    productor_id: 0,
    comission_value: 0,
    ranking: 0,
  };

  const handleSubmit = async (values: {
    name: string;
    price: number;
    productor_id: number;
    comission_value: number;
    ranking: number;
  }) => {
    try {
      await axios.post("http://localhost:3001/api/v1/products", values);
      console.log("product created successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const [state, setState] = useState<ProductorsState>({ productors: [] });
  const [productorName, setProductorName] = useState<string>("");
  const baseUrl = "http://localhost:3001/api/v1/";

  async function searchProductorByName(name: string): Promise<Productor[]> {
    try {
      const response = await axios.get<Productor[]>(
        `${baseUrl}productors/by-name/${name}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const handleSearch = async () => {
    const result = await searchProductorByName(productorName);
    setState({ productors: result });
  };

  return (
    <>
      <Border>
        <Title>
          <span>{productors}</span>
        </Title>
        <SubTitle>
          <h3>{myDataProductor}</h3>
          <label htmlFor="productorName">Produtor: </label>
          <input
            type="text"
            id="productorName"
            value={productorName}
            onChange={(e) => setProductorName(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </SubTitle>
        <SubTitle>
          <h3>{createProduct}</h3>
        </SubTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Border>
                <MarginForm>
                  <MarginForm>
                    <label htmlFor="name">{productName}</label>
                    <Field id="name" name="name" type="text" />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                  </MarginForm>
                  <MarginForm>
                    <label htmlFor="price">{productPrice}</label>
                    <Field id="price" name="price" type="number" />
                    {errors.price && touched.price ? (
                      <div>{errors.price}</div>
                    ) : null}
                  </MarginForm>
                  <MarginForm>
                    <label htmlFor="productor_id">{productorId}</label>
                    <Field
                      id="productor_id"
                      name="productor_id"
                      type="number"
                    />
                    {errors.productor_id && touched.productor_id ? (
                      <div>{errors.productor_id}</div>
                    ) : null}
                  </MarginForm>
                  <MarginForm>
                    <label htmlFor="comission_value">{comissionValue}</label>
                    <Field
                      id="comission_value"
                      name="comission_value"
                      type="number"
                    />
                    {errors.comission_value && touched.comission_value ? (
                      <div>{errors.comission_value}</div>
                    ) : null}
                  </MarginForm>
                  <MarginForm>
                    <label htmlFor="ranking">{ranking}</label>
                    <Field id="ranking" name="ranking" type="number" />
                    {errors.ranking && touched.ranking ? (
                      <div>{errors.ranking}</div>
                    ) : null}
                  </MarginForm>
                </MarginForm>
                <StyledButtonBuyCourse type="submit">
                  {send}
                </StyledButtonBuyCourse>
              </Border>
            </Form>
          )}
        </Formik>
        <Link to="/home">
          <Margin>
            <StyledButtonBuyCourse>{back}</StyledButtonBuyCourse>
          </Margin>
        </Link>
      </Border>
    </>
  );
}

export default Productors;
