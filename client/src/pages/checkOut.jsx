















// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import BackEndUrl from "../config/BackendUrl";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";

// const CheckOut = () => {
//   const navigate = useNavigate();
//   const [mydata, setMydata] = useState({});
//   const [showPaymentModal, setShowPaymentModal] = useState(false);

//   const cartData = useSelector((state) => state.mycart.cart);

//   let totalAmount = 0;
//   let productName = "";
//   let productImages = [];

//   cartData.forEach((item) => {
//     totalAmount += item.price * item.qnty;
//     productName += item.name + " ";
//     productImages.push(item.defaultImage);
//   });

//   const loadData = async () => {
//     let api = `${BackEndUrl}/user/getuser/?userid=${localStorage.getItem("userid")}`;
//     const response = await axios.get(api);
//     setMydata(response.data);
//   };

//   useEffect(() => {
//     if (!localStorage.getItem("username")) {
//       navigate("/signup");
//     }
//     loadData();
//   }, []);

//   // ⬇️ Trigger Stripe session creation from backend
//   const stripePay = async () => {
//     try {
//       const { data } = await axios.post(`${BackEndUrl}/api/payment/create-payment-intent`, {
//         amount: totalAmount,
//         items: cartData,
//         customerInfo: {
//           name: mydata.name,
//           email: mydata.email,
//           address: mydata.address,
//           city: mydata.city,
//           pincode: mydata.pincode
//         }
//       });

//       // Save clientSecret or other data in localStorage or pass via navigate
//       localStorage.setItem("stripeClientSecret", data.clientSecret);
//       navigate("/payment");
//     } catch (error) {
//       console.log("Stripe payment error:", error);
//       alert("Payment initialization failed.");
//     }
//   };

//   return (
//     <>
//       <h1 style={{ textAlign: "center", color: "#00ffcc" }}>
//         <i className="bi bi-credit-card me-2"></i> CheckOut
//       </h1>
//       <h3 style={{ textAlign: "center", color: "#00ff15" }}>
//         Net Payable Amount : ₹{totalAmount}
//       </h3>

//       <Form
//         style={{
//           width: "400px",
//           margin: "auto",
//           padding: "30px",
//           borderRadius: "16px",
//           color: "#000",
//           border: "2px solid #00ffcc",
//           boxShadow: "0 0 15px #00ffcc",
//         }}
//       >
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" value={mydata.name } readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="text" value={mydata.email } readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Shipping Address</Form.Label>
//           <Form.Control type="text" value={mydata.address } readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" value={mydata.city } readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Pin Code</Form.Label>
//           <Form.Control type="text" value={mydata.pincode } readOnly />
//         </Form.Group>
//         <Button variant="success" type="button" onClick={() => setShowPaymentModal(true)} style={{ width: "100%", fontWeight: "bold" }}>
//           Proceed to Pay
//         </Button>
//       </Form>



//       <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} centered>
//         <Modal.Header closeButton style={{ background: "#111", color: "#00ffcc" }}>
//           <Modal.Title>Complete Your Payment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ background: "#000", color: "#fff", fontFamily: "Orbitron" }}>
//           <h5>Choose a Payment Method</h5>
//           <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
//             <Button variant="outline-warning" onClick={stripePay}>Pay with Stripe</Button>
//             <Button variant="outline-light" onClick={() => alert("Using Cash on Delivery")}>Cash on Delivery</Button>
//           </div>
//         </Modal.Body>

//         <Modal.Footer style={{ background: "#111" }}>
//           <Button variant="danger" onClick={() => setShowPaymentModal(false)}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default CheckOut;




















// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import BackEndUrl from "../config/BackendUrl";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import "../styles/checkout.css"; // ⬅️ Custom CSS file

// const CheckOut = () => {
//   const navigate = useNavigate();
//   const [mydata, setMydata] = useState({});
//   const [showPaymentModal, setShowPaymentModal] = useState(false);

//   const cartData = useSelector((state) => state.mycart.cart);

//   let totalAmount = 0;
//   let productName = "";
//   let productImages = [];

//   cartData.forEach((item) => {
//     totalAmount += item.price * item.qnty;
//     productName += item.name + " ";
//     productImages.push(item.defaultImage);
//   });

//   const loadData = async () => {
//     let api = `${BackEndUrl}/user/getuser/?userid=${localStorage.getItem("userid")}`;
//     const response = await axios.get(api);
//     setMydata(response.data);
//   };

//   useEffect(() => {
//     if (!localStorage.getItem("username")) {
//       navigate("/signup");
//     }
//     loadData();
//   }, []);

//   const stripePay = async () => {
//     try {
//       const { data } = await axios.post(`${BackEndUrl}/api/payment/create-payment-intent`, {
//         amount: totalAmount,
//         items: cartData,
//         customerInfo: {
//           name: mydata.name,
//           email: mydata.email,
//           address: mydata.address,
//           city: mydata.city,
//           pincode: mydata.pincode
//         }
//       });
//       localStorage.setItem("stripeClientSecret", data.clientSecret);
//       navigate("/payment");
//     } catch (error) {
//       console.log("Stripe payment error:", error);
//       alert("Payment initialization failed.");
//     }
//   };

//   return (
//     <>
//       <h1 className="checkout-title">
//         <i className="bi bi-credit-card me-2"></i> CheckOut
//       </h1>
//       <h3 className="checkout-amount">Net Payable Amount : ₹{totalAmount}</h3>

//       <Form className="checkout-form">
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" value={mydata.name || ""} readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="text" value={mydata.email || ""} readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Shipping Address</Form.Label>
//           <Form.Control type="text" value={mydata.address || ""} readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" value={mydata.city || ""} readOnly />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Pin Code</Form.Label>
//           <Form.Control type="text" value={mydata.pincode || ""} readOnly />
//         </Form.Group>
//         <Button variant="success" type="button" onClick={() => setShowPaymentModal(true)} className="neon-button">
//           Proceed to Pay
//         </Button>
//       </Form>

//       <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} centered>
//         <Modal.Header closeButton className="modal-header-neon">
//           <Modal.Title>Complete Your Payment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="modal-body-neon">
//           <h5>Choose a Payment Method</h5>
//           <div className="payment-options">
//             <Button variant="outline-warning" className="neon-button-outline" onClick={stripePay}>Pay with Stripe</Button>
//             <Button variant="outline-light" className="neon-button-outline" onClick={() => alert("Using Cash on Delivery")}>Cash on Delivery</Button>
//           </div>
//         </Modal.Body>
//         <Modal.Footer className="modal-footer-neon">
//           <Button variant="danger" onClick={() => setShowPaymentModal(false)}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default CheckOut;






















import "../styles/checkout.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../config/BackendUrl";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  TextField,
  Button,
  Box,
  Typography,
  Modal,
} from "@mui/material";
const CheckOut = () => {
  const navigate = useNavigate();
  const [mydata, setMydata] = useState({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const cartData = useSelector((state) => state.mycart.cart);

  let totalAmount = 0;
  let productName = "";
  let productImages = [];

  cartData.forEach((item) => {
    totalAmount += item.price * item.qnty;
    productName += item.name + " ";
    productImages.push(item.defaultImage);
  });

  const loadData = async () => {
    let api = `${BackEndUrl}/user/getuser/?userid=${localStorage.getItem("userid")}`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signup");
    }
    loadData();
  }, []);

  const stripePay = async () => {
    try {
      console.log("🛒 Sending cartData to backend:", cartData);
console.log("📦 Customer Info:", mydata);
console.log("💰 Amount:", totalAmount);

      const { data } = await axios.post(`${BackEndUrl}/api/payment/create-payment-intent`, {
        amount: totalAmount,
        items: cartData,
        customerInfo: {
          name: mydata.name,
          email: mydata.email,
          address: mydata.address,
          city: mydata.city,
          pincode: mydata.pincode
        }
      });
      localStorage.setItem("stripeClientSecret", data.clientSecret);
      navigate("/payment");
    } catch (error) {
      console.log("Stripe payment error:", error);
      alert("Payment initialization failed.");
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "#00ffcc", mt: 4, fontFamily: "Orbitron" }}
      >
        <i className="bi bi-credit-card me-2"></i> CheckOut
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ color: "#00ff15", mb: 3, fontFamily: "Orbitron" }}
      >
        Net Payable Amount : ₹{totalAmount}
      </Typography>

      <Box
        sx={{
          width: 400,
          mx: "auto",
          p: 3,
          borderRadius: 3,
          backgroundColor: "#000",
          border: "2px solid lime",
          boxShadow: "0 0 20px lime",
        }}
      >
        {["name", "email", "address", "city", "pincode"].map((field, index) => (
          <TextField
            key={index}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            fullWidth
            value={mydata[field] || ""}
            margin="normal"
            InputProps={{
              readOnly: true,
              sx: {
                color: "lime",
                backgroundColor: "#000",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "lime",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#00ff88",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#00ff88",
                },
              },
            }}
            InputLabelProps={{
              sx: { color: "lime" }
            }}
          />
        ))}

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            fontWeight: "bold",
            backgroundColor: "lime",
            color: "#000",
            "&:hover": {
              backgroundColor: "#00ff88",
              boxShadow: "0 0 15px lime",
            },
          }}
          onClick={() => setShowPaymentModal(true)}
        >
          Proceed to Pay
        </Button>
      </Box>

      <Modal
        open={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "#000",
            borderRadius: 3,
            p: 4,
            boxShadow: "0 0 20px lime",
            color: "#fff",
            fontFamily: "Orbitron",
            border: "2px solid lime",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "lime" }}>
            Choose a Payment Method
          </Typography>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              color: "lime",
              borderColor: "lime",
              '&:hover': {
                backgroundColor: "lime",
                color: "#000",
              },
            }}
            onClick={stripePay}
          >
            Pay with Stripe
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "#fff",
              borderColor: "#fff",
              '&:hover': {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
            onClick={() => alert("Using Cash on Delivery")}
          >
            Cash on Delivery
          </Button>

          <Button
            variant="text"
            fullWidth
            sx={{ mt: 2, color: "red" }}
            onClick={() => setShowPaymentModal(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default CheckOut;
