// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { Button, Container, Row, Col, Card, Form, Alert, Badge } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import '../css/Payment.css';
// const stripePromise = loadStripe('pk_test_51RlXEXBM2VtJP2O23QgrEaDZHFZVD5vkzEmYDGKgUG86Qf9IV5xSxDBfpbsrFWJ8P38Qbtf0F8ktxkRTKFDklOru00UpzG0AF5');
// import BackEndUrl from '../config/BackendUrl';

// import '../css/Payment.css';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const cartItems = useSelector((state) => state.mycart.cart);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState({ success: false, message: '' });
//   const [customerInfo, setCustomerInfo] = useState({
//     name: '',
//     email: '',
//     address: ''
//   });

//   const [cardComplete, setCardComplete] = useState(false);
//   const [cardError, setCardError] = useState(null);

//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.qnty), 0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo({
//       ...customerInfo,
//       [name]: value
//     });
//   };

//   const handleCardChange = (event) => {
//     setCardComplete(event.complete);
//     setCardError(event.error ? event.error.message : '');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     if (!cardComplete) {
//       setPaymentStatus({ 
//         success: false, 
//         message: 'Please complete all card details including the expiration date and CVC.' 
//       });
//       return;
//     }

//     setIsProcessing(true);

//     const cardElement = elements.getElement(CardElement);
//     if (!cardElement) {
//       setPaymentStatus({ success: false, message: 'Card details not found. Please try again.' });
//       setIsProcessing(false);
//       return;
//     }

//     try {
  
//       const validatedItems = cartItems.map((item, index) => {
//         return {
//           _id: item._id || `temp-id-${index}`,
//           name: item.name || `Product ${index + 1}`,
//           price: typeof item.price === 'number' ? item.price : 0,
//           qnty: typeof item.qnty === 'number' ? item.qnty : 1
//         };
//       });

//       const { data } = await axios.post(`${BackEndUrl}/api/payment/create-payment-intent`, {
//         amount: total * 100,
//         items: validatedItems,
//         customerInfo
//       });

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: customerInfo.name,
//             email: customerInfo.email,
//             address: { line1: customerInfo.address }
//           }
//         }
//       });

//       if (result.error) {
//         setPaymentStatus({ success: false, message: result.error.message });
//       } else if (result.paymentIntent.status === 'succeeded') {
//         setPaymentStatus({ success: true, message: 'Payment successful!' });

//         try {
//           const orderResponse = await axios.post('http://localhost:8000/api/orders', {
//             items: validatedItems,  
//             customerInfo,
//             paymentId: result.paymentIntent.id,
//             amount: total
//           });
          
//           console.log('Order created:', orderResponse.data);
//         } catch (orderError) {
//           console.error('Failed to save order:', orderError);
         
//         }

//         setTimeout(() => navigate('/payment-success'), 2000);
//       } else {
//         setPaymentStatus({ success: false, message: `Payment status: ${result.paymentIntent.status}` });
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//       setPaymentStatus({
//         success: false,
//         message: error.response
//           ? `Server error: ${error.response.status} ${error.response.statusText}`
//           : `Error: ${error.message}`
//       });
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <Container className="payment-container my-5 ">
//       <h1 className="text-center mb-4">Checkout</h1>
//       <Row className="g-4">
//         <Col md={7}>
//           <Card className="p-4 shadow h-100 card-colour">
//             <h2 className="mb-4 d-flex align-items-center">
//               <i className="bi bi-credit-card me-2"></i> Payment Details
//             </h2>
            
//             {paymentStatus.message && (
//               <Alert variant={paymentStatus.success ? 'success' : 'danger'} 
//                      className="d-flex align-items-center">
//                 <i className={`bi ${paymentStatus.success ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
//                 {paymentStatus.message}
//               </Alert>
//             )}
            
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Label>
//                   <i className="bi bi-person me-2"></i> Full Name
//                 </Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={customerInfo.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </Form.Group>
              
//               <Form.Group className="mb-3">
//                 <Form.Label>
//                   <i className="bi bi-envelope me-2"></i> Email
//                 </Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={customerInfo.email}
//                   onChange={handleInputChange}
//                   placeholder="Enter your email address"
//                   required
//                 />
//               </Form.Group>
              
//               <Form.Group className="mb-3">
//                 <Form.Label>
//                   <i className="bi bi-house me-2"></i> Shipping Address
//                 </Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   name="address"
//                   value={customerInfo.address}
//                   onChange={handleInputChange}
//                   placeholder="Enter your complete address"
//                   rows={3}
//                   required
//                 />
//               </Form.Group>
              
//               <Form.Group className="mb-4">
//                 <Form.Label>
//                   <i className="bi bi-credit-card-2-front me-2"></i> Card Details
//                 </Form.Label>
//                 <div className="card-element-container p-3 border rounded">
//                   <CardElement 
//                     onChange={handleCardChange}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: '16px',
//                           color: '#424770',
//                           '::placeholder': {
//                             color: '#aab7c4',
//                           },
//                           fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//                         },
//                         invalid: {
//                           color: '#9e2146',
//                         },
//                       },
//                       hidePostalCode: true,
//                     }}
//                   />
//                 </div>
//                 {cardError && (
//                   <div className="text-danger mt-2 small">
//                     <i className="bi bi-exclamation-circle me-1"></i> {cardError}
//                   </div>
//                 )}
//                 <div className="mt-2 small text-muted">
//                   <i className="bi bi-info-circle me-1"></i>
//                   <span>Test Card: 4242 4242 4242 4242 | Expiry: Any future date (MM/YY) | CVC: Any 3 digits</span>
//                 </div>
//               </Form.Group>
              
//               <Button 
//                 variant="primary" 
//                 type="submit" 
//                 className="w-100 mt-3 py-3"
//                 disabled={!stripe || isProcessing || !cardComplete}
//               >
//                 {isProcessing ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     <i className="bi bi-lock-fill me-2"></i> Pay ₹{total.toFixed(2)}
//                   </>
//                 )}
//               </Button>
//             </Form>
//           </Card>
//         </Col>
        
//         <Col md={5}>
//           <Card className="p-4 shadow h-100">
//             <h3 className="mb-3 d-flex align-items-center">
//               <i className="bi bi-bag-check me-2"></i> Order Summary
//             </h3>
            
//             <div className="order-summary">
//               {cartItems.length === 0 ? (
//                 <div className="text-center py-4">
//                   <i className="bi bi-cart text-muted" style={{ fontSize: '2rem' }}></i>
//                   <p className="mt-2">Your cart is empty</p>
//                 </div>
//               ) : (
//                 <>
//                   {cartItems.map(item => (
//                     <div key={item._id} className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
//                       <div>
//                         <span className="fw-medium">{item.name}</span>
//                         <Badge bg="light" text="dark" className="ms-2">×{item.qnty}</Badge>
//                       </div>
//                       <span className="fw-medium">₹{(item.price * item.qnty).toFixed(2)}</span>
//                     </div>
//                   ))}
                  
//                   <div className="d-flex justify-content-between mt-3 pt-2">
//                     <span className="text-muted">Subtotal</span>
//                     <span>₹{total.toFixed(2)}</span>
//                   </div>
                  
//                   <div className="d-flex justify-content-between">
//                     <span className="text-muted">Shipping</span>
//                     <span>Free</span>
//                   </div>
                  
//                   <hr />
                  
//                   <div className="d-flex justify-content-between mt-2">
//                     <strong className="fs-5">Total</strong>
//                     <strong className="fs-5 text-primary">₹{total.toFixed(2)}</strong>
//                   </div>
//                 </>
//               )}
              
//               <div className="mt-4 pt-2 border-top">
//                 <div className="d-flex align-items-center mb-2">
//                   <i className="bi bi-shield-lock text-success me-2"></i>
//                   <span className="small">Secure Payment</span>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <i className="bi bi-truck text-primary me-2"></i>
//                   <span className="small">Free Shipping</span>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const Payment = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentForm />
//     </Elements>
//   );
// };
// export default Payment;
















import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Container, Row, Col, Card, Form, Alert, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import '../css/Payment.css';
const stripePromise = loadStripe('pk_test_51RlXEXBM2VtJP2O23QgrEaDZHFZVD5vkzEmYDGKgUG86Qf9IV5xSxDBfpbsrFWJ8P38Qbtf0F8ktxkRTKFDklOru00UpzG0AF5');
import BackEndUrl from '../config/BackendUrl';

import '../css/Payment.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.mycart.cart);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({ success: false, message: '' });
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: ''
  });

  const [cardComplete, setCardComplete] = useState(false);
  const [cardError, setCardError] = useState(null);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qnty), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value
    });
  };

  const handleCardChange = (event) => {
    setCardComplete(event.complete);
    setCardError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!cardComplete) {
      setPaymentStatus({ 
        success: false, 
        message: 'Please complete all card details including the expiration date and CVC.' 
      });
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setPaymentStatus({ success: false, message: 'Card details not found. Please try again.' });
      setIsProcessing(false);
      return;
    }

    try {
  
      const validatedItems = cartItems.map((item, index) => {
        return {
          _id: item._id || `temp-id-${index}`,
          name: item.name || `Product ${index + 1}`,
          price: typeof item.price === 'number' ? item.price : 0,
          qnty: typeof item.qnty === 'number' ? item.qnty : 1
        };
      });

      const { data } = await axios.post(`${BackEndUrl}/api/payment/create-payment-intent`, {
        amount: total * 100,
        items: validatedItems,
        customerInfo
      });

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: customerInfo.name,
            email: customerInfo.email,
            address: { line1: customerInfo.address }
          }
        }
      });

      if (result.error) {
        setPaymentStatus({ success: false, message: result.error.message });
      } else if (result.paymentIntent.status === 'succeeded') {
        setPaymentStatus({ success: true, message: 'Payment successful!' });

        try {
          const orderResponse = await axios.post('http://localhost:8000/api/orders', {
            items: validatedItems,  
            customerInfo,
            paymentId: result.paymentIntent.id,
            amount: total
          });
          
          console.log('Order created:', orderResponse.data);
        } catch (orderError) {
          console.error('Failed to save order:', orderError);
         
        }

        setTimeout(() => navigate('/payment-success'), 2000);
      } else {
        setPaymentStatus({ success: false, message: `Payment status: ${result.paymentIntent.status}` });
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus({
        success: false,
        message: error.response
          ? `Server error: ${error.response.status} ${error.response.statusText}`
          : `Error: ${error.message}`
      });
    }

    setIsProcessing(false);
  };

  return (
    <Container className="payment-container my-5 ">
      <h1 className="text-center mb-4">Checkout</h1>
      <Row className="g-4">
        <Col md={7}>
          <Card className="p-4  h-100 card-colour">
            <h2 className="mb-4 d-flex align-items-center">
              <i className="bi bi-credit-card me-2"></i> Payment Details
            </h2>
            
            {paymentStatus.message && (
              <Alert variant={paymentStatus.success ? 'success' : 'danger'} 
                     className="d-flex align-items-center">
                <i className={`bi ${paymentStatus.success ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
                {paymentStatus.message}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="bi bi-person me-2"></i> Full Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="bi bi-envelope me-2"></i> Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="bi bi-house me-2"></i> Shipping Address
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label>
                  <i className="bi bi-credit-card-2-front me-2"></i> Card Details
                </Form.Label>
                <div className="card-element-container p-3 border rounded">
                  <CardElement 
                    onChange={handleCardChange}
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                        color:'#fff',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                      hidePostalCode: true,
                    }}
                  />
                </div>
                {cardError && (
                  <div className="text-danger mt-2 small">
                    <i className="bi bi-exclamation-circle me-1"></i> {cardError}
                  </div>
                )}
                <div className="mt-2 small text-muted">
                  <i className="bi bi-info-circle me-1"></i>
                  <span style={{color:"white"}}>Test Card: 4242 4242 4242 4242 | Expiry: Any future date (MM/YY) | CVC: Any 3 digits</span>
                </div>
              </Form.Group>
              
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 mt-3 py-3"
                disabled={!stripe || isProcessing || !cardComplete}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-lock-fill me-2"></i> Pay ₹{total.toFixed(2)}
                  </>
                )}
              </Button>
            </Form>
          </Card>
        </Col>
        
        <Col md={5}>
          <Card className="p-4 shadow h-100">
            <h3 className="mb-3 d-flex align-items-center">
              <i className="bi bi-bag-check me-2"></i> Order Summary
            </h3>
            
            <div className="order-summary">
              {cartItems.length === 0 ? (
                <div className="text-center py-4">
                  <i className="bi bi-cart text-muted" style={{ fontSize: '2rem' }}></i>
                  <p className="mt-2">Your cart is empty</p>
                </div>
              ) : (
                <>
                  {cartItems.map(item => (
                    <div key={item._id} className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                      <div>
                        <span className="fw-medium">{item.name}</span>
                        <Badge bg="light" text="dark" className="ms-2">×{item.qnty}</Badge>
                      </div>
                      <span className="fw-medium">₹{(item.price * item.qnty).toFixed(2)}</span>
                    </div>
                  ))}
                  
                  <div className="d-flex justify-content-between mt-3 pt-2">
                    <span className="text-muted">Subtotal</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Shipping</span>
                    <span>Free</span>
                  </div>
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between mt-2">
                    <strong className="fs-5">Total</strong>
                    <strong className="fs-5 text-primary">₹{total.toFixed(2)}</strong>
                  </div>
                </>
              )}
              
              <div className="mt-4 pt-2 border-top">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-shield-lock text-success me-2"></i>
                  <span className="small">Secure Payment</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-truck text-primary me-2"></i>
                  <span className="small">Free Shipping</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};
export default Payment;







































// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   CardElement,
//   useStripe,
//   useElements,
//   Elements,
// } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Alert,
//   Badge,
// } from 'react-bootstrap';
// import { TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BackEndUrl from '../config/BackendUrl';

// const stripePromise = loadStripe('pk_test_51Rf2bnBeaJARbmm...');

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const cartItems = useSelector((state) => state.mycart.cart);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState({ success: false, message: '' });
//   const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', address: '' });
//   const [cardComplete, setCardComplete] = useState(false);
//   const [cardError, setCardError] = useState(null);

//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.qnty), 0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo({ ...customerInfo, [name]: value });
//   };

//   const handleCardChange = (event) => {
//     setCardComplete(event.complete);
//     setCardError(event.error ? event.error.message : '');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements || !cardComplete) return;

//     setIsProcessing(true);
//     const cardElement = elements.getElement(CardElement);
//     if (!cardElement) {
//       setPaymentStatus({ success: false, message: 'Card details missing.' });
//       setIsProcessing(false);
//       return;
//     }

//     try {
//       const validatedItems = cartItems.map((item, i) => ({
//         _id: item._id || `id-${i}`,
//         name: item.name,
//         price: item.price,
//         qnty: item.qnty,
//       }));

//       const { data } = await axios.post(`${BackEndUrl}/api/payment/create-payment-intent`, {
//         amount: total * 100,
//         items: validatedItems,
//         customerInfo,
//       });

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: customerInfo.name,
//             email: customerInfo.email,
//             address: { line1: customerInfo.address },
//           },
//         },
//       });

//       if (result.error) {
//         setPaymentStatus({ success: false, message: result.error.message });
//       } else if (result.paymentIntent.status === 'succeeded') {
//         setPaymentStatus({ success: true, message: 'Payment successful!' });

//         await axios.post(`${BackEndUrl}/api/orders`, {
//           items: validatedItems,
//           customerInfo,
//           paymentId: result.paymentIntent.id,
//           amount: total,
//         });

//         setTimeout(() => navigate('/payment-success'), 2000);
//       } else {
//         setPaymentStatus({ success: false, message: 'Payment status: ' + result.paymentIntent.status });
//       }
//     } catch (err) {
//       setPaymentStatus({ success: false, message: err.message });
//     }
//     setIsProcessing(false);
//   };

//   return (
//     <Container className="my-5" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00F300' }}>
//       <Row>
//         <Col md={7}>
//           <Card style={{ backgroundColor: '#1b1b1b', border: '1px solid #333', borderRadius: '12px', boxShadow: '0 1px 6px rgba(0,243,0,0.2)' }} className="p-4 mb-4">
//             <h2 className="mb-4 text-center" style={{ color: '#00F300' }}>
//               <i className="bi bi-credit-card me-2"></i> Secure Payment
//             </h2>

//             {paymentStatus.message && (
//               <Alert variant={paymentStatus.success ? 'success' : 'danger'}>{paymentStatus.message}</Alert>
//             )}

//             <form onSubmit={handleSubmit}>
//               {['name', 'email', 'address'].map((field, i) => (
//                 <TextField
//                   key={field}
//                   label={field === 'address' ? 'Shipping Address' : field.charAt(0).toUpperCase() + field.slice(1)}
//                   variant="outlined"
//                   name={field}
//                   fullWidth
//                   multiline={field === 'address'}
//                   rows={field === 'address' ? 3 : 1}
//                   value={customerInfo[field]}
//                   onChange={handleInputChange}
//                   required
//                   sx={{
//                     input: { color: '#00F300' },
//                     label: { color: '#00F300' },
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: '#00F300' },
//                       '&:hover fieldset': { borderColor: '#00F300' },
//                       '&.Mui-focused fieldset': { borderColor: '#00F300' },
//                     },
//                     mb: 3,
//                   }}
//                 />
//               ))}

//               <div className="p-3 border rounded mb-3" style={{ backgroundColor: '#121212', border: '1px solid #00F300' }}>
//                 <CardElement
//                   onChange={handleCardChange}
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#00F300',
//                         '::placeholder': { color: '#aaa' },
//                         fontFamily: 'Orbitron, sans-serif',
//                       },
//                       invalid: { color: '#ff1744' },
//                     },
//                   }}
//                 />
//               </div>

//               {cardError && <div className="text-danger mb-2">{cardError}</div>}

//               <Button
//                 type="submit"
//                 disabled={!stripe || isProcessing || !cardComplete}
//                 className="w-100 mt-3 py-3"
//                 style={{
//                   backgroundColor: '#00F300',
//                   color: '#000',
//                   fontWeight: 'bold',
//                   fontSize: '1.05rem',
//                   border: 'none',
//                   boxShadow: '0 0 6px rgba(0,243,0,0.3)',
//                 }}
//               >
//                 {isProcessing ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}
//               </Button>
//             </form>
//           </Card>
//         </Col>

//         <Col md={5}>
//           <Card className="p-4" style={{ backgroundColor: '#121212', border: '1px solid #333', color: '#ccc', borderRadius: '12px', boxShadow: '0 1px 6px rgba(0,243,0,0.05)' }}>
//             <h4 className="mb-3" style={{ color: '#00F300' }}><i className="bi bi-bag-check me-2"></i> Order Summary</h4>
//             {cartItems.length === 0 ? (
//               <div className="text-center py-4">Your cart is empty</div>
//             ) : (
//               <>
//                 {cartItems.map((item) => (
//                   <div key={item._id} className="d-flex justify-content-between border-bottom pb-2 mb-2">
//                     <div>{item.name} <Badge bg="secondary">×{item.qnty}</Badge></div>
//                     <div>₹{(item.price * item.qnty).toFixed(2)}</div>
//                   </div>
//                 ))}
//                 <div className="d-flex justify-content-between mt-3">
//                   <strong>Total</strong>
//                   <strong style={{ color: '#00F300' }}>₹{total.toFixed(2)}</strong>
//                 </div>
//               </>
//             )}
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const Payment = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentForm />
//   </Elements>
// );

// export default Payment;
