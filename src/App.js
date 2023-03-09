import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
