import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartDispatchContext,
  addToCart,
} from "../../contexts/CartProvider/CartProvider";
import Button from "../Button/Button";
// Styles
import * as S from "./styles";

const ProductCard = ({ product }) => {
  const { id, name, type, image, price } = product;
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);

  const onAddProduct = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(dispatch, productWithQuantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <S.ProductCard>
      <Link to={`/id=${id}`}>
      <S.ContainerImg>
        <S.imgURL src={image} alt={name}></S.imgURL>
      </S.ContainerImg>
      </Link>
      <S.ProductName>{name}</S.ProductName>
      <S.ProductType>{type}</S.ProductType>
      <S.ProductPrice>{`$ ${price}`}</S.ProductPrice>
      <S.ContainerCenter>
        <Button type="submit" onClick={() => onAddProduct(product)}>
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </Button>
      </S.ContainerCenter>
    </S.ProductCard>
  );
};

export default ProductCard;
