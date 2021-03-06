import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import Protectedroute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} auth={true} />
        <Route exact path="/register" element={<Register />} auth={true} />
        <Route exact path="/dashboard" element={<Dashboard />} auth={true} />
        <Route exact path="/logout" element={<Logout />} auth={true} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
