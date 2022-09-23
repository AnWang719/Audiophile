import "./App.css";
import OffcanvasMenu from "./components/shared/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import BestGear from "./components/shared/BestGear";
import Footer from "./components/shared/Footer";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <OffcanvasMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
      <BestGear />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
