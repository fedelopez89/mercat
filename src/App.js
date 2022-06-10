import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import MainHeader from "./components/MainHeader/MainHeader";
import ListProducts from "./components/ListProducts/ListProducts";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import CartProvider from "./contexts/CartProvider/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import ProductDetail from "./components/ProductDetail/ProductDetail";
// Styles
import { DivApp } from "./styles";

function App() {
  const [productSearched, setProductSearched] = useState("");

  const searchProduct = (enteredText) => {
    setProductSearched(enteredText);
  };

  return (
    <DivApp>
      <CartProvider>
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
      </CartProvider>
    </DivApp>
  );
}

export default App;
