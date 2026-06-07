import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DocumentsPage from "./pages/DocumentsPage";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/documents"
          element={<DocumentsPage />}
        />

        <Route
          path="/documents/:id"
          element={<EditorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;