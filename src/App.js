import "./App.css";
import OffcanvasMenu from "./components/shared/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import BestGear from "./components/shared/BestGear";
import Footer from "./components/shared/Footer";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage";
import ProductDetail from "./components/productPage/ProductDetail";
import CheckOut from "./components/cart/CheckOut";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <OffcanvasMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/checkOut" element={<CheckOut />} />
      </Routes>
      {pathname === "/checkOut" ? null : <BestGear />}
      <Footer />
    </>
  );
}

export default App;
