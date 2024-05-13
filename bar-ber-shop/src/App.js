import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/header/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gioithieu from "./pages/gioithieu/Gioithieu";
import Bangia from "./pages/price/bangia";
import './App.css';
import Icon from "./componets/common/button";
import Footer from "./layout/footer/footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daotao" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gioithieu" element={<Gioithieu />} />
          <Route path="/dichvu" element={<Bangia />} />
        </Routes>
        <Icon/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
