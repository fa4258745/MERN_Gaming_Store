// import React from 'react'

// const Succesfull = () => {
//   return (
//     <>
//     <div style={styles.container}>
//         <h2 style={styles.message}>Payment succesfull..</h2>
//         <p style={styles.text}>Thank you for purchasing</p>
//     </div>
//     </>
//   )
// }

// const styles = {
//   container: {
//     height: '80vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     backgroundColor: '#f0f8ff',
//   },
//   message: {
//     color: '#28a745',
//     fontSize: '2rem',
//     marginBottom: '10px',
//   },
//   text: {
//     fontSize: '1.2rem',
//     color: '#333',
//   },
// };

// export default Succesfull









const Succesfull = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.message}>Payment Successful</h2>
        <p style={styles.text}>Thank you for purchasing!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f0f8ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px 60px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  message: {
    color: '#28a745',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default Succesfull;
