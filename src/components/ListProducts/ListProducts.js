import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/getProducts";
import ProductCard from "../ProductCard/ProductCard";
// Material UI
import { Pagination } from "@mui/material";
// Styles
import * as S from "./styles";

const ListProducts = ({ productSearched }) => {
  const [listProduct, setListProduct] = useState([]);
  const [listFullProduct, setListFullProduct] = useState([]);
  const [amiiLength, setAmiiLength] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const numberOfResults = 24;

  const filterProducts = (productSearched) => {
    const filteredProducts = listFullProduct.filter(product => product.name.toLowerCase().includes(productSearched.toLowerCase()));
    return filteredProducts;
  }

  useEffect(() => {
    setIsLoading(true);
    if (productSearched.length>0) {
      const productsFiltered = filterProducts(productSearched);
      setListProduct(productsFiltered);
      setAmiiLength(productsFiltered.length);
      setIsLoading(false);
    } else {
      getProducts().then((products) => {
        setListProduct(products);
        setListFullProduct(products);
        setAmiiLength(products.length);
        setIsLoading(false);
      });
    }
  }, [productSearched]);

  let content = <p>No products found.</p>;

  if (listProduct !== undefined) {
    if (listProduct.length > 0) {
      content = listProduct
        .slice(
          1 + numberOfResults * (page - 1),
          numberOfResults + 1 + numberOfResults * (page - 1)
        )
        .map((product) => {
          return <ProductCard key={product.id} product={product} />;
        });
    }
  }

  return (
    <>
      {isLoading && <S.Spinner/>}
      <S.ProductList>{content}</S.ProductList>
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        color="primary"
        count={Math.floor(amiiLength / numberOfResults)}
        onChange={(event, value) => setPage(value)}
        showFirstButton
        showLastButton
      />
    </>
  );
};

export default ListProducts;
