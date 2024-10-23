import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="CategoryPage" element={<CategoryPage />}></Route>
          <Route path="RegistrasiPage" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
