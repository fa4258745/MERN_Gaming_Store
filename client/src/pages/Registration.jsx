// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import "../css/Registration.css";

// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import ASUSGameImg from "../images/v-against-the-robot-cyberpunk-2077-game-5o-1080x1920.jpg";
// import { useState } from "react";
// import BackEndUrl from "../config/BackendUrl";
// function Registration() {
//   const [input, setInput] = useState({});
//   const navigate = useNavigate();
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//     console.log(input);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let api = `${BackEndUrl}/user/registration`;
//     const response = await axios.post(api, input);
//     console.log(response.data);
//     alert("You are Succesfully Registered!!");
//   };

//   return (
//     <MDBContainer fluid className="p-5" style={{ backgroundColor: "#000" }}>
//       <div className="container">
//         <MDBRow className="gx-lg-5 align-items-center">
//           {/* Left Image Content (ASUS Gaming Poster) */}
//           <MDBCol lg="6" className="mb-5 mb-lg-0 text-center">
//             <img
//               src={ASUSGameImg}
//               alt="ASUS Gaming Poster"
//               className="img-fluid rounded shadow-lg"
//               style={{ maxHeight: "700px", border: "4px solid #01EF15" }}
//             />
//           </MDBCol>

//           {/* Form Card */}
//           <MDBCol lg="6" className="mb-5 mb-lg-0">
//             <MDBCard>
//               <MDBCardBody
//                 className="py-5 px-md-5 glass"
//                 style={{ backgroundColor: "#000" }}
//               >
//                 <form>
//                   <MDBRow>
//                     <MDBCol md="6" className="mb-4">
//                       <MDBInput
//                         label="First name"
//                         id="name"
//                         type="text"
//                         name="name"
//                         onChange={handleInput}
//                       />
//                     </MDBCol>
//                     <MDBCol md="6" className="mb-4">
//                       <MDBInput
//                         label="City"
//                         id="city"
//                         type="text"
//                         name="city"
//                         onChange={handleInput}
//                       />
//                     </MDBCol>
//                   </MDBRow>

//                   <MDBInput
//                     className="mb-4"
//                     label="Email address"
//                     id="email"
//                     type="email"
//                     name="email"
//                     onChange={handleInput}
//                   />

//                   <MDBInput
//                     className="mb-4"
//                     label="Address"
//                     id="address"
//                     type="text"
//                     name="address"
//                     onChange={handleInput}
//                   />

//                   <MDBInput
//                     className="mb-4"
//                     label="Pin Code"
//                     id="pincode"
//                     type="text"
//                     name="pincode"
//                     onChange={handleInput}
//                   />

//                   <MDBInput
//                     className="mb-4"
//                     label="Password"
//                     id="password"
//                     type="password"
//                     name="password"
//                     onChange={handleInput}
//                   />

//                   <div className="form-check d-flex justify-content-center mb-4">
//                     <input
//                       className="form-check-input me-2"
//                       type="checkbox"
//                       id="subscribe"
//                       defaultChecked
//                     />
//                     <label className="form-check-label" htmlFor="subscribe">
//                       Subscribe to our newsletter
//                     </label>
//                   </div>

//                   <MDBBtn
//                     type="submit"
//                     className="btn btn-primary btn-block mb-4    gaming-signup-btn   "
//                     onClick={handleSubmit}
//                   >
//                     Sign up
//                   </MDBBtn>

//                   <div className="text-center">
//                     <p>or sign up with:</p>

//                     <MDBBtn
//                       type="button"
//                       className="btn btn-success btn-block mb-4 gaming-signup-btn"
//                       onClick={() => {
//                         navigate("/signup");
//                       }}
//                       style={{ color: "blue" }}
//                     >
//                       SignUp now
//                     </MDBBtn>
                    
//                     <MDBBtn type="button" color="link" className="btn-floating mx-1">
//                       <MDBIcon fab icon="facebook-f" />
//                     </MDBBtn>
//                     <MDBBtn type="button" color="link" className="btn-floating mx-1">
//                       <MDBIcon fab icon="google" />
//                     </MDBBtn>
//                     <MDBBtn type="button" color="link" className="btn-floating mx-1">
//                       <MDBIcon fab icon="twitter" />
//                     </MDBBtn>
//                     <MDBBtn type="button" color="link" className="btn-floating mx-1">
//                       <MDBIcon fab icon="github" />
//                     </MDBBtn>

//                     {/* Social Icons Section */}
//                     <div className="d-flex justify-content-center">
//                       <MDBBtn
//                         type="button"
//                         color="link"
//                         className="btn-floating mx-2"
//                       >
//                         <MDBIcon fab icon="facebook-f" />
//                       </MDBBtn>
//                       <MDBBtn
//                         type="button"
//                         color="link"
//                         className="btn-floating mx-2"
//                       >
//                         <MDBIcon fab icon="google" />
//                       </MDBBtn>
//                       <MDBBtn
//                         type="button"
//                         color="link"
//                         className="btn-floating mx-2"
//                       >
//                         <MDBIcon fab icon="twitter" />
//                       </MDBBtn>
//                       <MDBBtn
//                         type="button"
//                         color="link"
//                         className="btn-floating mx-2"
//                       >
//                         <MDBIcon fab icon="github" />
//                       </MDBBtn>
//                     </div>
//                   </div>
//                 </form>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </div>
//     </MDBContainer>
//   );
// }

// export default Registration;





















import Button from '@mui/material/Button';


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";
import TextField from "@mui/material/TextField";
import "../css/Registration.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import ASUSGameImg from "../images/engine-p.webp";
import { useState } from "react";
import BackEndUrl from "../config/BackendUrl";

// Styled Material UI TextField component
const StyledTextField = ({ label, name, type = "text", onChange }) => (
  <TextField
    label={label}
    name={name}
    type={type}
    fullWidth
    variant="standard"
    onChange={onChange}
    InputLabelProps={{
      style: { color: "#05ff19", fontFamily: "Orbitron, sans-serif" },
    }}
    InputProps={{
      style: {
        color: "#fff",
        fontFamily: "Orbitron, sans-serif",
      },
      disableUnderline: false,
    }}
    sx={{
      mb: 3,
      "& .MuiInput-underline:before": {
        borderBottomColor: "white",
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#6E6EE9",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#6E6EE9",
      },
      px: 2,
      py: 1,
      borderRadius: "5px",
    }}
  />
);

function Registration() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackEndUrl}/user/registration`;
    const response = await axios.post(api, input);
    console.log(response.data);
    alert("You are Successfully Registered!!");
  };

  return (
    <MDBContainer fluid className="p-5" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <MDBRow className="gx-lg-5 align-items-center">
          {/* Left Image Content */}
          <MDBCol lg="6" className="mb-5 mb-lg-0 text-center">
            <img
              src={ASUSGameImg}
              alt="ASUS Gaming Poster"
              className="img-fluid rounded shadow-lg"
              style={{ height: "100%",width:"100%"}}
            />
          </MDBCol>


          {/* Right Form Section */}
          <MDBCol lg="6" className="mb-5 mb-lg-0">
            <MDBCard>
              <MDBCardBody
                className="py-5 px-md-5 glass"
                style={{ backgroundColor: "#000" }}
              >
                <form>
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <StyledTextField
                        label="First Name"
                        name="name"
                        onChange={handleInput}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <StyledTextField
                        label="City"
                        name="city"
                        onChange={handleInput}
                      />
                    </MDBCol>
                  </MDBRow>

                  <StyledTextField
                    label="Email Address"
                    name="email"
                    type="email"
                    onChange={handleInput}
                  />

                  <StyledTextField
                    label="Address"
                    name="address"
                    onChange={handleInput}
                  />

                  <StyledTextField
                    label="Pin Code"
                    name="pincode"
                    onChange={handleInput}
                  />

                  <StyledTextField
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleInput}
                  />

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="subscribe"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="subscribe">
                      Subscribe to our newsletter
                    </label>
                  </div>
{/* 
                  <MDBBtn
                    type="submit"
                    className="btn btn-primary btn-block mb-4 gaming-signup-btn"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </MDBBtn> */}

                  <Button variant="outlined" style={{width:"50%"}} onClick={handleSubmit}>SIGN UP</Button>

                  <div className="text-center">
                    <p>or sign up with:</p>

                


<Button
  variant="contained"
 onClick={() => {
                        navigate("/signup");
                      }}
  sx={{
    mt: 2,
    mb: 4,
    width: "50%",
    fontFamily: "Orbitron, sans-serif",
    backgroundColor: "#000",
    color: "#01EF15",
    fontWeight: "bold",
    borderRadius: "8px",
    letterSpacing: "1px",
    transition:"0.2s ease-in",
    border:"2px solid #01EF15",
    '&:hover': {
       backgroundColor: "#01EF15",
        border:"2px solid #fff",
        color:"#000",
        letterSpacing:"2px",
        transform:"scale(1.08)"

           
      
    },
  }}
>
LOGIN NOW
</Button>



















                    {/* Social Icons Section */}
                    <div className="d-flex justify-content-center">
                      <MDBBtn
                        type="button"
                        color="link"
                        className="btn-floating mx-2"
                      >
                        <MDBIcon fab icon="facebook-f"  style={{color:"#6A0443"}}/>
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="link"
                        className="btn-floating mx-2"
                      >
                        <MDBIcon fab icon="google" />
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="link"
                        className="btn-floating mx-2"
                      >
                        <MDBIcon fab icon="twitter" />
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="link"
                        className="btn-floating mx-2"
                      >
                        <MDBIcon fab icon="github" />
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default Registration;
