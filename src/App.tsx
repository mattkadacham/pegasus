import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { DrinksPage } from "./pages/DrinksPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="drinks" element={<DrinksPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
