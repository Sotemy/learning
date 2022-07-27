import { Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/Login";

import { useAuth, useLoggedIn } from "./hooks/useAuth";
import { Register } from "./pages/Register";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={useAuth(false, <Home />)} />
        <Route path="/login" element={useLoggedIn(false, <Login />)} />
        <Route path="/register" element={useLoggedIn(false, <Register />)} />
      </Routes>
    </>
  );
}

export default App;
