import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Components
import Modal from "../../UI/Modal";
import Button from "../Button/Button";
// Stores
import {
  CartStateContext,
  CartDispatchContext,
  reduceFromCart,
  removeFromCart,
  addToCart,
  toggleCartPopup,
} from "../../contexts/CartProvider/CartProvider";
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
                    >
                      X
                    </Button>
                  )}
                  {product.quantity > 1 && (
                    <Button
                      type="submit"
                      onClick={() => handleReduce(product.id)}
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
        <Link to="/checkout">
          <Button type="submit" onClick={() => toggleCartPopup(dispatch)}>
            CHECKOUT
          </Button>
        </Link>
        <Button type="submit" onClick={() => toggleCartPopup(dispatch)}>
          CLOSE
        </Button>
      </S.ButtonProceed>
    </Modal>
  );
};

export default CartPreview;
