import "./App.css";
import AuthPage from "./pages/AuthPage";
import NestIco from "./img/NestIco";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App ">
      <header>
        <a href="/">Главная</a>
        <br />
        <a href="auth">Авторизироваться</a>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
