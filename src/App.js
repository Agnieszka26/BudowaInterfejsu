import NavBar from "./Components/NavMenu/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserProfile from "./Components/Users/UserProfile";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
