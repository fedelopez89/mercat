import React, { useContext } from "react";
import {
  CartStateContext,
  CartDispatchContext,
  reduceFromCart,
  removeFromCart,
  addToCart,
} from "../../contexts/CartProvider/CartProvider";
// Styles
import * as S from "./styles";

const CartPreview = () => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleReduce = (productId) => {
    return reduceFromCart(dispatch, productId);
  };

  const handleButtonCheckout = (items) => {
    const totalPrice = items.reduce(
      (acu, cur) => acu + cur.quantity * cur.price,
      0
    );
    return alert("Total Price is : $" + parseFloat(totalPrice).toFixed(2));
  };

  const handleAddProduct = (product) => {
    addToCart(dispatch, { ...product, quantity: 1 });
  };

  return (
    <S.CartPreview>
      <S.CartItems>
        {items.length < 1 && <S.NoData>No products added.</S.NoData>}
        {items.length > 0 &&
          items.map((product) => {
            return (
              <S.CartItem key={product.id}>
                <S.CartItemImage src={product.image} />
                <S.ProductInfo>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductPrice>{product.price}</S.ProductPrice>
                </S.ProductInfo>
                <S.ProductTotal>
                  <S.ProductQuantity>
                    {`${product.quantity} ${
                      product.quantity > 1 ? "Nos." : "No."
                    }`}
                  </S.ProductQuantity>
                  <S.ProductAmount>
                    {parseFloat(product.quantity * product.price).toFixed(2)}
                  </S.ProductAmount>
                </S.ProductTotal>
                <S.ProductOptions>
                  {product.quantity === 1 && (
                    <S.ProductButton onClick={() => handleRemove(product.id)}>
                      x
                    </S.ProductButton>
                  )}
                  {product.quantity > 1 && (
                    <S.ProductButton onClick={() => handleReduce(product.id)}>
                      -
                    </S.ProductButton>
                  )}

                  <S.ProductButton onClick={() => handleAddProduct(product)}>
                    +
                  </S.ProductButton>
                </S.ProductOptions>
              </S.CartItem>
            );
          })}
      </S.CartItems>
      <S.ButtonProceed
        type="button"
        onClick={() => handleButtonCheckout(items)}
      >
        PROCEED TO CHECKOUT
      </S.ButtonProceed>
    </S.CartPreview>
  );
};

export default CartPreview;
