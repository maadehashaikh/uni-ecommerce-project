import "./App.css";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import NewArrival from "./components/Pages/NewArrival";
import BestSelling from "./components/Pages/BestSelling";
import Sale from "./components/Pages/Sale";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newArrival" element={<NewArrival />} />
        <Route path="/bestSelling" element={<BestSelling />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
