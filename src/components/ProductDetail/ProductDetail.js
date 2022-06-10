import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../helpers/getProductById";
// Styles
import { Spinner } from "./../ListProducts/styles";

const ProductDetail = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(params.productId).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, []);

  let content = "No productId found";

  if (product !== undefined) {
    content = (
      <>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <h3>{`Product ID: ${params.productId}`}</h3>
        <h3>{`AmiiboSeries: ${product.amiiboSeries}`}</h3>
        <h3>{`Character: ${product.character}`}</h3>
        <h3>{`GameSeries: ${product.gameSeries}`}</h3>
        <h3>{`Type: ${product.type}`}</h3>
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
