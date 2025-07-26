import LOGO from "../images/LOGO.png";
import GoggleIcon from "../images/2916251_google_communication_logo_marketing_media_icon.png";
import {
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import Button from "@mui/material/Button";
import "../css/Signup.css"; // Renamed to avoid override
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../config/BackendUrl";
import { useState } from "react";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ Moved here

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const loginwithGoogle = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const handleSubmit = async (e) => {
    let api = `${BackEndUrl}/user/login`;
    e.preventDefault();
    try {
      const response = await axios.post(api, { password, email });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBContainer fluid className="pro-gaming-container">
      <MDBRow className="justify-content-center align-items-center h-100 ">
        <MDBCol
          md="6"
          className="pro-login-card shadow-glass"
          style={{ padding: "50px" }}
        >
          <div className="text-center ">
            <img src={LOGO} alt="GamerZone Logo" className="login-logo-img" />
            <h3
              className="login-title"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Welcome to GamerZone
            </h3>
            <p className="login-subtitle">Access your battlestation</p>
          </div>

          {/* <MDBInput
            wrapperClass="mb-4 login-input"
            label="Email Address"
            id="loginEmail"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /> */}

          <TextField
            label="Email Address"
            variant="standard"
            fullWidth
            InputLabelProps={{
              style: { color: "#fff", fontFamily: "Orbitron, sans-serif" },
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl
            variant="filled"
            sx={{
              m: 1,
              width: "100%",
              borderRadius: "4px",
            }}
          >
            <InputLabel
              htmlFor="filled-adornment-password"
              sx={{ color: "#fff", fontFamily: "Orbitron, sans-serif" }}
            >
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                color: "#fff",
                "&::before": { borderBottomColor: "#fff" },
                "&::after": { borderBottomColor: "#fff" },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                    style={{
                      color: "white",
                      backgroundColor: "#6E6EE9",
                      boxShadow: "0px 0px 5px blue",
                      fontFamily: "Orbitron,sans-serif",
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* <MDBInput
            wrapperClass="mb-4 login-input"
            label="Password"
            id="loginPassword"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /> */}

          <div className="text-center mb-4">
            {/* <MDBBtn className="login-btn w-100" onClick={handleSubmit}>
              Sign In
            </MDBBtn> */}

            <Button
              variant="outlined"
              style={{ width: "50%" }}
              onClick={handleSubmit}
            >
              SIGN UP
            </Button>

            <a className="forgot-link d-block mt-2" href="#!">
              Forgot password?
            </a>

            <div>
              <img
                width={"200px"}
                onClick={loginwithGoogle}
                className="goggleIcon"
                height={"40px"}
                style={{
                  border: "0px solid cyan",
                  padding: "1px 65px",
                  objectFit: "cover",
                  marginTop: "20px",
                  boxShadow: " 0px 0px 3px cyan",
                }}
                src={GoggleIcon}
              />
              <p style={{ color: "#fff", padding: "5px", fontSize: "14px" }}>
                {" "}
                Login With Google
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <p className="mb-0 text-light">Don't have an account?</p>
            {/* <MDBBtn
              outline
              className="ms-3 register-btn"
              color="light"
              onClick={() => {
                navigate("/registration");
              }}
            >
              Register
            </MDBBtn> */}

            <Button
              variant="outlined"
              onClick={() => {
                navigate("/registration");
              }}
              style={{ width: "30%", margin: "0px 10px", color: "#01ef15" }}
            >
              Registration
            </Button>
          </div>
        </MDBCol>

        <MDBCol
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="login-right-panel p-5 text-white">
            <h4 className="panel-heading mb-3">Your Portal Awaits</h4>
            <p className="panel-text">
              Join an elite community of gamers. Customize your experience,
              battle for glory, and connect globally. This isn’t just a login —
              it’s the gateway to your legend.
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
