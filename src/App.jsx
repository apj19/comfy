import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetailsCard from "./components/ProductDetailsCard";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div className="min-w-[375px] max-w-[1440px] min-h-[100vh] font-['Poppins'] bg-gray-50  ">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route
          path="/product/:productid"
          element={<ProductDetailsCard />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
