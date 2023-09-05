import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
