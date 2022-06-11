import React from "react";
// Components
import Button from "../Button/Button";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { cartItemsActions } from "../../store/index";
// Styles
import * as S from "./styles";

const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const totalAmount = () => {
    const totalPrice = items.reduce(
      (acu, cur) => acu + cur.quantity * cur.price,
      0
    );
    return parseFloat(totalPrice).toFixed(2);
  };

  const handleRemove = (productId) => {
    dispatch(cartItemsActions.removeFromCart(productId));
  };

  const handleReduce = (productId) => {
    dispatch(cartItemsActions.decrement(productId));
  };

  const handleAddProduct = (product) => {
    dispatch(cartItemsActions.addToCart(product));
  };

  const listItems = (
    <>
      <h2>{`*** TOTAL $${totalAmount()} ***`}</h2>
      {items.map((product) => {
        return (
          <S.CartItem key={product.id}>
            <S.CartItemImage src={product.image} />
            <S.ProductInfo>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductPrice>{product.price}</S.ProductPrice>
            </S.ProductInfo>
            <S.ProductTotal>
              <S.ProductQuantity>
                {`${product.quantity} ${product.quantity > 1 ? "Nos." : "No."}`}
              </S.ProductQuantity>
              <S.ProductAmount>
                {parseFloat(product.quantity * product.price).toFixed(2)}
              </S.ProductAmount>
            </S.ProductTotal>
            <S.ProductOptions>
              <Button type="submit" onClick={() => handleReduce(product.id)}>
                -
              </Button>
              <Button type="submit" onClick={() => handleAddProduct(product)}>
                +
              </Button>
              <Button type="submit" onClick={() => handleRemove(product.id)}>
                X
              </Button>
            </S.ProductOptions>
          </S.CartItem>
        );
      })}
    </>
  );

  return (
    <S.CartItems>
      {items.length < 1 && <S.NoData>No products added.</S.NoData>}
      {items.length > 0 && listItems}
    </S.CartItems>
  );
};

export default Checkout;
