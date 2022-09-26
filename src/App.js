import "./App.css";
import OffcanvasMenu from "./components/shared/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import BestGear from "./components/shared/BestGear";
import Footer from "./components/shared/Footer";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage";
import ProductDetail from "./components/productPage/ProductDetail";

function App() {
  return (
    <>
      <OffcanvasMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/:id" element={<ProductPage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
      <BestGear />
      <Footer />
    </>
  );
}

export default App;
