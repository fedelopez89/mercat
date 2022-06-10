import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../helpers/getProductById";
// Styles
import { Spinner } from "./../ListProducts/styles";
import * as S from "./styles";

const ProductDetail = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, [productId]);

  let content = "No productId found";

  if (product !== undefined) {
    content = (
      <>
        <S.ContainerDetail>
          <h1>{product.name}</h1>
          <S.DetailImg src={product.image} alt={product.name} />
          <S.Details>
            <b>{"Product ID: "}</b>
            {productId}
          </S.Details>
          <S.Details>
            <b>{"AmiiboSeries: "}</b>
            {product.amiiboSeries}
          </S.Details>
          <S.Details>
            <b>{"Character: "}</b>
            {product.character}
          </S.Details>
          <S.Details>
            <b>{"GameSeries: "}</b>
            {product.gameSeries}
          </S.Details>
          <S.Details>
            <b>{"Type: "}</b>
            {product.type}
          </S.Details>
        </S.ContainerDetail>
      </>
    );
  }
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && content}
    </>
  );
};

export default ProductDetail;
