import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Home from "./components/homepage/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home/:username" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
