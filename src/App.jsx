import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";

// auth import
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="CategoryPage" element={<CategoryPage />} />
          <Route path="CheckoutPage" element={<CheckoutPage />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="ForgotPasswordPage" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
