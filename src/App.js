import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/main/Main";
import Product from "./components/product/product";
import "./App.css";
import Basket from "./components/basket/basket";
import Reg from "./components/reg/reg";
import Login from "./components/login/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="basket" element={<Basket/>}/>
        <Route path="reg" element={<Reg/>}/>
        <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
