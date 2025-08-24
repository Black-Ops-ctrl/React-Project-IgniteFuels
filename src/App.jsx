import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services"; 
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Router>
      <Navbar />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
