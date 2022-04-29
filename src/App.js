import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About/About";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Blog from "./Pages/Blogs/Blog";
import Footer from "./Pages/Footer/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";


//npm install axios@0.26.1
function App() {
  return (
    <div className=" bg-teal-50">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
