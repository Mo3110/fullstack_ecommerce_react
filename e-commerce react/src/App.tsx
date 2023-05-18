import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import ProductDetails from "./pages/product-details";
import ShippingAddress from "./pages/shipping-address";
import Payment from "./pages/payment";
import Success from "./pages/sucess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/checkout/shipping" element={<ShippingAddress />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
