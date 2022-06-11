import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
// Redux
import { useDispatch } from "react-redux";
import { cartItemsActions } from "../../store/index";
// Styles
import * as S from "./styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  //
  const { id, name, type, image, price } = product;
  const [isAdded, setIsAdded] = useState(false);

  const onAddProduct = () => {
    dispatch(cartItemsActions.addToCart(product));
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
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
