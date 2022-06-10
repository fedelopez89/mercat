import React, { useContext } from "react";
// Components
import Button from "../Button/Button";
// Stores
import {
  CartStateContext,
  CartDispatchContext,
  reduceFromCart,
  removeFromCart,
  addToCart,
} from "../../contexts/CartProvider/CartProvider";
// Styles
import * as S from "./styles";

const Checkout = () => {
  const { items } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const totalAmount = () => {
    const totalPrice = items.reduce(
      (acu, cur) => acu + cur.quantity * cur.price,
      0
    );
    return parseFloat(totalPrice).toFixed(2);
  };

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleReduce = (productId) => {
    return reduceFromCart(dispatch, productId);
  };

  const handleAddProduct = (product) => {
    addToCart(dispatch, { ...product, quantity: 1 });
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
