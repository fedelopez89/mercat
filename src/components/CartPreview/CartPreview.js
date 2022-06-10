import React, { useContext } from "react";
import {
  CartStateContext,
  CartDispatchContext,
  reduceFromCart,
  removeFromCart,
  addToCart,
  toggleCartPopup,
} from "../../contexts/CartProvider/CartProvider";
import Modal from "../../UI/Modal";
import Button from "../Button/Button";
// Styles
import * as S from "./styles";

const CartPreview = () => {
  const { items } = useContext(CartStateContext);
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
    <Modal onClose={() => toggleCartPopup(dispatch)}>
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
                    <Button
                      type="submit"
                      onClick={() => handleRemove(product.id)}
                      style1={{marginBottom: "15px !important"}}
                    >
                      X
                    </Button>
                  )}
                  {product.quantity > 1 && (
                    <Button
                      type="submit"
                      onClick={() => handleReduce(product.id)}
                      style1={{marginBottom: "5px !important"}}                      
                    >
                      -
                    </Button>
                  )}
                  <Button
                    type="submit"
                    onClick={() => handleAddProduct(product)}
                  >
                    +
                  </Button>
                </S.ProductOptions>
              </S.CartItem>
            );
          })}
      </S.CartItems>
      <S.ButtonProceed>
        <Button type="submit" onClick={() => handleButtonCheckout(items)}>
          CHECKOUT
        </Button>
        <Button type="submit" onClick={() => toggleCartPopup(dispatch)}>
          CLOSE
        </Button>
      </S.ButtonProceed>
    </Modal>
  );
};

export default CartPreview;
