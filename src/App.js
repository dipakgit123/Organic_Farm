
import "./App.css";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar1 from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import SignIn from "./components/SignIn"
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Community from "./components/Community";







const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/community" element={<Community/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
