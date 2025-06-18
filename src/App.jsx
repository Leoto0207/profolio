import "@fontsource/roboto/400.css";
import Box from "@mui/material/Box";
import "./App.css";
import Navabar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Box>
      <Router>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
