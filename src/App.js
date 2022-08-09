import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Bussiness from "./pages/Bussiness"
import Health from "./pages/Health";
import Sceience from "./pages/Sceince"
import Navbar from "./pages/Navbar";
import Entertainments from "./pages/Entertainments"
import Tech from "./pages/Tech";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sports" element={ <Sports/>} />
        <Route exact path="/bussiness" element={<Bussiness/>}/>
        <Route exact path="/health" element={<Health />} />
        <Route exact path="/science" element={<Sceience/>}/>
        <Route exact path="/entertainment" element={<Entertainments/>}/>
        <Route exact path="/tech" element={<Tech/>}/>


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
