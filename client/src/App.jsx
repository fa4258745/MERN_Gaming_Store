import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./admin/Dashboard";
import Layout from "./Layout";
import Admin from "./admin/admin";
import UploadProduct from "./admin/uploadProduct";
import CartData from "./CartData";
import FavouriteData from "./FavouriteData";
import SignUp from "./pages/SignUp";
import Registration from "./pages/Registration";
import CheckOut from "./pages/checkOut";
import StripeProvider from "./components/StripeProvider";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import CustomerOrder from "./admin/customerOrder"
import ProductDisplay from "./pages/ProductDisplay"
import Controllers from "./categoryPage/controller"
import DVDGAMES from "./categoryPage/dvdgames"
import Search from "./pages/SearchResult"
import { ToastContainer } from "react-toastify";import "react-toastify/dist/ReactToastify.css";import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="cartdata" element={<CartData />} />
          <Route path="favouritedata" element={<FavouriteData />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="controllers" element={<Controllers/>} />
          <Route path="dvdgame" element={<DVDGAMES/>} />
          <Route path="/search/:keyword" element={<Search/>} />
                     <Route path="productdisplay/:id" element={<ProductDisplay/>}/>
          <Route
            path="/payment"
            element={
              <StripeProvider>
                <Payment />
              </StripeProvider>
            }
          />
        </Route>

        <Route path="/admindashboard" element={<Dashboard />}>
          <Route path="uploadproduct" element={<UploadProduct />} />
             <Route path="customerorder" element={<CustomerOrder/>}/> 
        </Route>
      </Routes>
         <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
};

export default App;
