import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/main/Main";
import Product from "./components/product/product";
import "./App.css";
import Basket from "./components/basket/basket";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="basket" element={<Basket/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
