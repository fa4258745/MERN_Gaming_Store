import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import BackendURL from "../config/BackendUrl";
// import Crysis from "../images/Crysis.png";
import ControlVideo from "../images/Controller-blue.mp4";

function App() {
  const [adminid, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adminid, password);
    try {
      let api = `${BackendURL}/admin/adminlogin`;
      const response = await axios.post(api, { adminid, password });
      localStorage.setItem("adminid", response.data.adminid);
      localStorage.setItem("adminpassword", password);
      navigate("/admindashboard");
      console.log(response);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <>
      <MDBContainer fluid className="login-main">
        <MDBRow className="align-items-center justify-content-center h-100">
          {/* Left Side Image */}
          <MDBCol md="6" className="d-none d-md-block left-image">
            {/* <img
              src={Crysis}
              alt="gaming"
              className="img-fluid rounded shadow"
            /> */}

            <div className="video-usb-flex">
              <video width={500} height={550} autoPlay loop muted>
                <source src={ControlVideo} />
              </video>
            </div>
          </MDBCol>

          {/* Right Side Login Form */}
          <MDBCol md="6" className="right-panel">
            <div className="form-box">
              <h3 className="text-center mb-4 text-primary-glow">
                Gamer Login
              </h3>
              <MDBInput
                wrapperClass="mb-4"
                label="Enter id"
                id="form1"
                type="text"
                value={adminid}
                onChange={(e) => {
                  setAdminId(e.target.value);
                }}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="#!" className="link-glow">
                  Forgot password?
                </a>
              </div>

              <MDBBtn className="mb-4 w-100 glow-btn" onClick={handleSubmit}>
                Sign in
              </MDBBtn>

              <div className="text-center">
                <p className="text-light">
                  Not a member?{" "}
                  <a href="#!" className="link-glow">
                    Register
                  </a>
                </p>
                <p className="text-light">or sign in with:</p>

                <div className="d-flex justify-content-center">
                  <MDBBtn tag="a" color="none" className="social-icon">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                  <MDBBtn tag="a" color="none" className="social-icon">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>
                  <MDBBtn tag="a" color="none" className="social-icon">
                    <MDBIcon fab icon="google" />
                  </MDBBtn>
                  <MDBBtn tag="a" color="none" className="social-icon">
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackEndUrl from '../config/BackendUrl';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// const AdminLogin=()=>{
//     const [adminid, setAdminid] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//    const handleSubmit=async(e)=>{
//            e.preventDefault();
//            console.log(adminid, password);
//            try {
//                let api=`${BackEndUrl}/admin/adminlogin`;
//              const response = await axios.post(api, {adminid, password});
//               localStorage.setItem("adminid", response.data.adminid);
//              navigate("/admindashboard");
//              console.log(response);
//            } catch (error) {
//             alert(error.response.data.msg)

//            }
//    }

//     return(
//         <>
//         <h1 align="center"> Admin Login</h1>
//          <Form style={{width:"300px", margin:"auto"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Id</Form.Label>
//         <Form.Control type="text"  value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//         </>
//     )
// }

// export default AdminLogin;
