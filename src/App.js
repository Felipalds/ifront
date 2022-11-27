import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ApplePage from "./pages/ApplePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="apple" element={<ApplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
