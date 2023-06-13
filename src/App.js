import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/main/Main";
import Product from "./components/product/product";
import "./App.css";
import Basket from "./components/basket/basket";
import Reg from "./components/reg/reg";
import Login from "./components/login/login";
import Form from "./components/form/form";
import MyOrder from "./components/myOrder/myOrder";
import AdminLogin from "./components/adminLogin/adminLogin";
import AdminProduct from "./components/adminProduct/adminProduct";
import AdminPanel from "./components/adminPanel/adminPanel";
import AdminGrup from "./components/adminGrup/adminGrup";
import Zvort from "./components/zvort/zvort";
import Canditer from "./components/canditer/canditer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="basket" element={<Basket />} />
          <Route path="reg" element={<Reg />} />
          <Route path="login" element={<Login />} />
          <Route path="form" element={<Form />} />
          <Route path="myOrder" element={<MyOrder />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="adminMain" element={<AdminPanel />} />
          <Route path="adminProduct" element={<AdminProduct />} />
          <Route path="adminGrupt" element={<AdminGrup />} />
          <Route path="zvort" element={<Zvort />} />
          <Route path="c" element={<Canditer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
