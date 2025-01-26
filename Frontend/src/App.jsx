import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenGenrateForm from "./components/TokenGenrateForm";
import Home from "./pages/Home";
import TokenForm from "./pages/TokenForm";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="TokenForm" element={<TokenGenrateForm />} />
        </Route>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
