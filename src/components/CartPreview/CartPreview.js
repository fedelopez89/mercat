import React from "react";
import { Link } from "react-router-dom";
// Components
import Modal from "../../UI/Modal";
import Button from "../Button/Button";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { cartItemsActions } from "../../store/index";
// Styles
import * as S from "./styles";

const CartPreview = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleRemove = (productId) => {
    dispatch(cartItemsActions.removeFromCart(productId));
  };

  const handleReduce = (productId) => {
    dispatch(cartItemsActions.decrement(productId));
  };

  const handleAddProduct = (product) => {
    dispatch(cartItemsActions.addToCart(product));
  };

  const toggleCartPopupHandler = () => {
    dispatch(cartItemsActions.toggleCartPreview());
  };

  return (
    <Modal onClose={toggleCartPopupHandler}>
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
          <Button type="submit" onClick={toggleCartPopupHandler}>
            CHECKOUT
          </Button>
        </Link>
        <Button type="submit" onClick={toggleCartPopupHandler}>
          CLOSE
        </Button>
      </S.ButtonProceed>
    </Modal>
  );
};

export default CartPreview;
