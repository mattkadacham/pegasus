import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollManager } from "./components/ScrollManager";
import { SiteLayout } from "./components/SiteLayout";
import { DrinksPage } from "./pages/DrinksPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="drinks" element={<DrinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
