import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import KategoriPage from "./pages/KategoriPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="KategoriPage" element={<KategoriPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
