import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About/About/About";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Blog from "./Pages/Blogs/Blogs/Blog";
import Footer from "./Pages/Footer/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import Inventory from "./Pages/Inventories/Inventory/Inventory";
import ItemDetails from "./Pages/Inventories/ItemDetails/ItemDetails";
import AddStock from "./Pages/Inventories/AddStock/AddStock";
import MyItems from "./Pages/Inventories/MyItems/MyItems";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";


//npm install axios@0.26.1
function App() {


  return (
    <div className=" ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>
        <Route path="/add-stock" element={
          <RequireAuth>
            <AddStock />
          </RequireAuth>
        }></Route>
        <Route path="/my-items" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
