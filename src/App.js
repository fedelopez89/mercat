import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import CartPreview from "./components/CartPreview/CartPreview";
import Checkout from "./components/Checkout/Checkout";
import ListProducts from "./components/ListProducts/ListProducts";
import MainHeader from "./components/MainHeader/MainHeader";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SearchProduct from "./components/SearchProduct/SearchProduct";
// Redux
import { useSelector } from "react-redux";
// Styles
import { DivApp } from "./styles";

function App() {
  const isCartOpen = useSelector((state) => state.isCartOpen);
  const [productSearched, setProductSearched] = useState("");

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
