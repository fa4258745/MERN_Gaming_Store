// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
// import GradientText from '../GradientText';
// import TextField from '@mui/material/TextField';
// import React, { useState, useEffect } from "react";
// import "../css/GamingNavbar.css";
// import LOGO from "../images/LOGO.png";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { FaShoppingCart } from "react-icons/fa";
// import axios from "axios";
// import BackEndUrl from "../config/BackendUrl"; // Make sure this is correct
// import { MDBInput } from "mdb-react-ui-kit";
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [username, setUsername] = useState("");

//   const cartData = useSelector((state) => state.mycart.cart);
//   const cartLength = cartData.length;

//   const favouriteData = useSelector((state) => state.myfavourite.favourite);
//   const favouriteLength = favouriteData.length;

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//   };

//   useEffect(() => {
//     const fetchUserName = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const res = await axios.post(
//           `${BackEndUrl}/user/auth`,
//           {},
//           {
//             headers: {
//               "auth-token": token,
//             },
//           }
//         );
//         setUsername(res.data.name);
//       } catch (err) {
//         console.error("Auth error:", err);
//         localStorage.removeItem("token");
//       }
//     };

//     fetchUserName();
//   }, []);

//   return (
//     <>
//       <nav className="gaming-navbar">
//         <div className="nav-left">
//           <div className="nav-logo">
          

//           <GradientText
//   colors={["#29BE0F", "#000000", "#722E6D", "#000000", "#000"]}
//   animationSpeed={8}
//   showBorder={false}
//   className="custom-class"
// >
 
//   <h3>
//    GameVerse <img src={LOGO} style={{ width: "50px" }} alt="logo" />
//       </h3>
// </GradientText>









//             {/* <input
//     type="text"
//     className="form-control bg-dark text-white border border-cyan rounded-start"
//     placeholder="Search Games"
//     style={{ boxShadow: "0 0 5px #742E6E", fontFamily: "Orbitron" }}
//   /> */}
// <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
//   {/* <TextField
//               id="standard-search"
//               label="Search"
//               type="search"
              
//               variant="standard"
//               style={{backgroundColor:"#3a3a3a",
//               boxShadow:"0px 0px 5px red",
//                color:"white"
//               }}
//             /> */}
//    <TextField
//       id="standard-search"
//       label="Search"
//       type="search"
//       variant="standard"
//       InputProps={{
//         sx: {
//           color: "white",
//           "&:before": {
//             borderBottom: "1px solid white", // unfocused
//           },
//           "&:hover:not(.Mui-disabled):before": {
//             borderBottom: "1px solid white", // hover
//           },
//           "&.Mui-focused:after": {
//             borderBottom: "2px solid white", // focused underline
//           },
//         },
//       }}
//       InputLabelProps={{
//         sx: {
//           color: "white",
//           "&.Mui-focused": {
//             color: "white",
//           },
//         },
//       }}
//       sx={{
      
      
//         borderRadius: "4px",
//       }}
//     />
  



// </div>
          
//           </div>
//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             ☰
//           </div>
//         </div>

//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

//           <li>
//             WELCOME :{" "}
//             <span style={{ color: "" }}>
//               {localStorage.getItem("username")}{" "}
//             </span>
//           </li>

//           <li>
//             <span
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 navigate("/signup");
//               }}
//             >
//               {" "}
//               SIGNIN{" "}
//             </span>
//           </li>
//           <span>
//             <a
//               href="#"
//               style={{
//                 color: "red",
//                 fontWeight: "bold",
//                 textTransform: "uppercase",
//                 textDecoration: "none",
//               }}
//               className="danger"
//               onClick={logout}
//             >
//               Logout
//             </a>
//           </span>
//         </ul>

//         <div className="nav-right">
//           <div className="lang-currency">
            
//             <div className="dropdown-item">
//           <li style={{listStyleType:"none"}} onClick={() => navigate("/")}>HOME</li>
            
//             </div>
//           </div>

//           <div className="favorite" onClick={() => navigate("/favouritedata")}>
//             <span className="icon">❤️</span>
//             <span className="favorite-text">FAVOURITES</span>
//             <div className="favorite-count">{favouriteLength}</div>
//           </div>

//           <div className="cart">
//             <span className="icon">

//               {/* <FaShoppingCart
//                 className="carticon"
//                 onClick={() => navigate("/cartdata")}
//                 style={{ cursor: "pointer" }}
//               /> */}

//   <IconButton>
//       <ShoppingCartIcon fontSize="small"     className="carticon"   onClick={() => navigate("/cartdata")}
//                 style={{ cursor: "pointer",color:"white" }} />
//     </IconButton>


//             </span>
//             <span className="cart-text">
//               CART: <span className="cart-amount">{cartLength}</span>
//             </span>
//             <div className="cart-count">{cartLength}</div>
//           </div>

//           {/* ✅ Show logged-in user's name */}
//           {username && (
//             <div
//               className="username-display"
//               style={{ marginLeft: "15px", fontWeight: "bold", color: "#fff" }}
//             >
//               {username}
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;










import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import GradientText from '../GradientText';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from "react";
import "../css/GamingNavbar.css";
import LOGO from "../images/LOGO.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackendUrl";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const cartData = useSelector((state) => state.mycart.cart);
  const cartLength = cartData.length;

  const favouriteData = useSelector((state) => state.myfavourite.favourite);
  const favouriteLength = favouriteData.length;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchQuery.trim()) {
        navigate(`/search/${searchQuery.trim()}`);
        setSearchQuery("");
      }
    }
  };

  useEffect(() => {
    const fetchUserName = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.post(
          `${BackEndUrl}/user/auth`,
          {},
          {
            headers: {
              "auth-token": token,
            },
          }
        );
        setUsername(res.data.name);
      } catch (err) {
        console.error("Auth error:", err);
        localStorage.removeItem("token");
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <nav className="gaming-navbar">
        {/* LEFT SECTION */}
        <div className="nav-left">
          <div className="nav-logo">
            <GradientText
              colors={["#29BE0F", "#000000", "#722E6D", "#000000", "#000"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <h3>
                GameVerse <img src={LOGO} style={{ width: "50px" }} alt="logo" />
              </h3>
            </GradientText>

            {/* SEARCH BAR */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <TextField
                id="standard-search"
                label="Search"
                type="search"
                variant="standard"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                InputProps={{
                  sx: {
                    color: "white",
                    "&:before": { borderBottom: "1px solid white" },
                    "&:hover:not(.Mui-disabled):before": { borderBottom: "1px solid white" },
                    "&.Mui-focused:after": { borderBottom: "2px solid white" },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                    "&.Mui-focused": { color: "white" },
                  },
                }}
              />
              <IconButton onClick={handleSearch}>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>

        {/* CENTER LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            WELCOME:{" "}
            <span style={{ color: "#0f0" }}>
              {localStorage.getItem("username")}
            </span>
          </li>

          <li
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            SIGNIN
          </li>

          <span>
            <a
              href="#"
              style={{
                color: "red",
                fontWeight: "bold",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              className="danger"
              onClick={logout}
            >
              Logout
            </a>
          </span>
        </ul>

        {/* RIGHT SECTION */}
        <div className="nav-right">
          <div className="lang-currency">
            <li style={{ listStyleType: "none", cursor: "pointer" }} onClick={() => navigate("/")}>
              HOME
            </li>
          </div>

          <div className="favorite" onClick={() => navigate("/favouritedata")}>
            <span className="icon">❤️</span>
            <span className="favorite-text">FAVOURITES</span>
            <div className="favorite-count">{favouriteLength}</div>
          </div>

          <div className="cart">
            <span className="icon">
              <IconButton>
                <ShoppingCartIcon
                  fontSize="small"
                  className="carticon"
                  onClick={() => navigate("/cartdata")}
                  style={{ cursor: "pointer", color: "white" }}
                />
              </IconButton>
            </span>
            <span className="cart-text">
              CART: <span className="cart-amount">{cartLength}</span>
            </span>
            <div className="cart-count">{cartLength}</div>
          </div>

          {username && (
            <div
              className="username-display"
              style={{ marginLeft: "15px", fontWeight: "bold", color: "#fff" }}
            >
              {username}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
