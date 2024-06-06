import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";

const App: React.FC = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
