import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import MainHeader from "./components/MainHeader/MainHeader";
import ListProducts from "./components/ListProducts/ListProducts";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import { CartStateContext } from "./contexts/CartProvider/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import ProductDetail from "./components/ProductDetail/ProductDetail";
// Store

// Styles
import { DivApp } from "./styles";
import CartPreview from "./components/CartPreview/CartPreview";

function App() {
  const [productSearched, setProductSearched] = useState("");
  const { isCartOpen } = useContext(CartStateContext);

  const searchProduct = (enteredText) => {
    setProductSearched(enteredText);
  };

  return (
    <DivApp>
      {isCartOpen && <CartPreview />}
      <MainHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchProduct onSearchProduct={searchProduct} />
              <ListProducts productSearched={productSearched}></ListProducts>
            </>
          }
        ></Route>
        <Route path="/id=:productId" element={<ProductDetail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </DivApp>
  );
}

export default App;
