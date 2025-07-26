// import React from 'react';
// import { Container, Button, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';


// const PaymentSuccess = () => {
//   const navigate = useNavigate();


//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//       <Card className="text-center shadow" style={{ maxWidth: '600px' }}>
//         <Card.Body className="p-5">
//           <div className="mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
//             </svg>
//           </div>
//           <h1 className="mb-3">Payment Successful!</h1>
//           <p className="mb-4 text-muted">
//             Thank you for your purchase. Your order has been successfully processed.
//           </p>
//           <Button 
//             variant="primary" 
//             size="lg" 
//             onClick={() => navigate('/')}
//           >
//             Continue Shopping
//           </Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default PaymentSuccess;







import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1a1a1a, #0f0f0f)',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <Card
        className="text-center"
        style={{
     
      
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderRadius: '20px',
          border: '1px solid #00ff15 ',
          boxShadow: '0 4px 25px rgba(0, 255, 204, 0.2)',
          color: '#ffffff',
          transition: '0.3s ease-in-out',
        }}
      >
        <Card.Body >
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="#00ffcc"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
              style={{ filter: 'drop-shadow(0 0 5px #00ffcc)' }}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <h1 style={{ color: '#00ffcc', textShadow: '0 0 4px #00ffcc' }}>
            Payment Successful!
          </h1>
          <p style={{ color: '#cccccc', marginBottom: '30px', fontSize: '1rem' }}>
            Thank you for your purchase. Your order has been successfully processed.
          </p>
          <Button
            size="lg"
            style={{
              backgroundColor: 'transparent',
              color: '#00ffcc',
              fontWeight: 'bold',
              border: '2px solid #00ffcc',
              padding: '12px 30px',
              fontSize: '1rem',
              borderRadius: '30px',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 0 10px rgba(0, 255, 204, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onClick={() => navigate('/')}
            onMouseEnter={e => {
              e.target.style.backgroundColor = '#00ffcc';
              e.target.style.color = '#000';
              e.target.style.boxShadow = '0 0 25px #00ffcc';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#00ffcc';
              e.target.style.boxShadow = '0 0 10px rgba(0, 255, 204, 0.2)';
            }}
          >
            Continue Shopping
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;
