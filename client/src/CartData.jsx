





import "./css/CartData.css";
import { useSelector, useDispatch } from "react-redux";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { dataIncrease, dataDecrease, itemRemove } from "./CartSlice";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const CartData = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalAmount = 0;
  cartData.forEach((item) => {
    totalAmount += item.qnty * item.price;
  });

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Gaming Cart</h1>

      <div className="cart-main-container">
        {/* Left - Cart Items */}
        <div className="cart-items-grid">
          {cartData.map((key) => (
            <div className="cart-card-wrapper" key={key.id}>
              <div className="cart-card">
                <div className="cart-flex-img-box">
                  <img
                    src={key.defaultImage}
                    alt={key.name}
                    className="cart-img"
                  />
                  <div className="cart-details">
                    <h2>{key.name}</h2>
                    <p>{key.description}</p>
                    <p><strong>Category:</strong> {key.category}</p>
                    <p style={{ color: "#0B5ED7" }}><strong>Price:</strong> ₹{key.price}</p>
                    <div className="cart-quantity">
                      <FaMinusCircle onClick={() => dispatch(dataDecrease({ id: key.id }))} />
                      <span>{key.qnty}</span>
                      <FaPlusCircle onClick={() => dispatch(dataIncrease({ id: key.id }))} />
                    </div>
                    <button className="remove-btn" onClick={() => dispatch(itemRemove({ id: key.id }))}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Sticky Order Summary */}
        {cartData.length > 0 && (
          <div className="card-flex-cardData">
            <h3 style={{ color: "#fff", marginBottom: "20px" }}>Order Summary</h3>
            <div className="summary-line">
              <h6>Subtotal</h6>
              <h6>₹{totalAmount}</h6>
            </div>
            <div className="summary-line">
              <h5>Shipping:</h5>
              <h5>Free</h5>
            </div>
            <h5>Secure Payment</h5>
            <p><strong style={{ color: "#fff" }}>Items:</strong> {cartData.length}</p>
            <hr />
            <h3><strong style={{ color: "#0B5ED7" }}>Total:</strong> ₹{totalAmount}</h3>
            <Button style={{ marginTop: "20px", width: "100%" }} onClick={() => navigate("/checkout")}>
              Proceed To Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartData;
