import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import TrackPage from "./pages/TrackPage";

// auth import
import RegisterPage from "./pages/RegisterPage";
import OtpPage from "./pages/OtpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="CategoryPage" element={<CategoryPage />} />
          <Route path="CheckoutPage" element={<CheckoutPage />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="OrderPage" element={<OrderPage />} />
          <Route path="/TrackPage/:orderId" element={<TrackPage />} />

          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="OtpPage" element={<OtpPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="ForgotPasswordPage" element={<ForgotPasswordPage />} />
          <Route path="NewPasswordPage" element={<NewPasswordPage />} />
          <Route path="ProfilePage" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
