import "./App.css";
import Carousels from "./components/carousel/Carousels";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeCategory from "./components/homeCategory/HomeCategory";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import RegisterPage from "./pages/auth/registerPage/RegisterPage";
import OrderTrackingPage from "./pages/order/OrderTrackingPage";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/order-track" element={<OrderTrackingPage />} />
      </Routes>
      {/* <Carousels />
      <HomeCategory /> */}
      <Footer />
    </>
  );
}

export default App;
