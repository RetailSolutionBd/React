import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import './App.css';
import './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
