import { Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import { useAuth, useLoggedIn } from "./hooks/useAuth";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={useAuth(<Home />)} />
        <Route path="/login" element={useLoggedIn(<Login />)} />
        <Route path="/register" element={useLoggedIn(<Register />)} />
      </Routes>
    </>
  );
}

export default App;
