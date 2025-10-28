import React, { useEffect } from "react";
import "./css/home2.css";
// import "./css/home.css"
import CustomCursor from "./CustomCursor";
import { FaArrowUp } from "react-icons/fa";

import { motion, useScroll } from "framer-motion";

// import TEXTANIMATION from "./TEXTANimation"
// import card_img_1 from "./images/Games-DVD/call_of_duty_black_oops_3.jpg";
// import card_img_2 from "./images/Games-DVD/cyberpunk.jpg";
// import card_img_3 from "./images/Games-DVD/GTA_V.jpg";
// import card_img_4 from "./images/Games-DVD/red_dead_redemption_2.jpg";
// import card_img_5 from "./images/Games-DVD/FAR_CRY4.jpg";
// import card_img_6 from "./images/Games-DVD/SEGNALAZIONE – Resident Evil 8_ Village – videogioco di Capcom 2021.jpeg";
// import card_img_7 from "./images/Games-DVD/the_last_of_us.jpg";
// import card_img_8 from "./images/Games-DVD/Uncharted_4.jpg";

import CardImg from "./images/New folder/d73d0b8b2b200e66ede8a953b3feb704.jpg";
import CardImg1 from "./images/MOUSEKEYBOARD/Gravastar-Mercury_m1.jpg";
import CardImg2 from "./images/Games-DVD/the_last_of_us.jpg";
import CardImg4 from "./images/CONSOLE/9f582f62bd9b24ccbf642b30d0d725ad.jpg";
import CardImg5 from "./images/CONSOLE/c4afb4c346517ee13455388d5de7cb88.jpg";

import FlowingMenu from "./FlowingMenu";

import Waves from "./Waves";

import controllerBlue from "./images/Controllers/Blue-XboxCOntroller.jpg";
import controllerWhite from "./images/Controllers/CONTROLLER-WHITE2.jpg";
import controllerDualTone1 from "./images/Controllers/DualTone-1.jpg";
import controllerDualTone2 from "./images/Controllers/DualTone-2.jpg";
import controllerDuo from "./images/Controllers/DUO-controller.jpg";
import controlerRide from "./images/Controllers/Drive-Cntrl.jpg";
import controllerGrey from "./images/Controllers/GREY-XBOX_Controller.jpg";
import controllerPurple from "./images/Controllers/Purple-XBOX_Controller.jpg.jpg";

import imgDetial1 from "./images/GAMES-1.jpg";
import imgDetial2 from "./images/GAMES-2.jpg";
import { IoGameController } from "react-icons/io5";
import blog1 from "./images/blog/blog-1.jpg";
import blog2 from "./images/blog/blog-2.jpg";
import blog3 from "./images/blog/blog-3.jpg";
import blog4 from "./images/blog/blog-4.jpg";

// import gtaBg from "./images/grand_theft_auto_vi_gta_6_videogame_2025_games_gaming_vice_city_jason_lucia-wallpaper-1920x600.jpg";
import gtaBg from "./images/geforce-rtx-50-series-games-bm-xl980-d@2x.jpg";
// import loaderGif from "./images/9408cfa7e59471cf954118dcacf0122b.gif";
import Spidey from "./images/Spidey.png";

import ghostLoader from "./images/NEW_LOADER.png";
import { useState } from "react";
import Futuristic from "./Futiristic";
import ControlVideo from "./images/controller-vid.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import PaginationCart from "./pages/productCard";
import { useDispatch } from "react-redux";
import { addtoCart } from "./CartSlice"; // update path if different

import { addtoFavourite } from "./FavourtieSlice"; // update path if different

import ASUSGSAPIMG from "./images/COLLECTIONS/GamingPoster-ASUS.jpg";
import GAMINGPOSTER1 from "./images/COLLECTIONS/FarCry_Primal.jpg";
import GAMINGPOSTER2 from "./images/COLLECTIONS/Gaming_Poster1.jpg";
import GAMINGPOSTER3 from "./images/COLLECTIONS/EvilWIthin.jpg";

import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const demoItems = [
    { link: "#", text: "ASUS JOIN THE REPUBLIC", image: ASUSGSAPIMG },
    { link: "#", text: "ASUS JOIN THE REPUBLIC", image: GAMINGPOSTER2 },
    { link: "#", text: "Far Cry Primal", image: GAMINGPOSTER1 },
    { link: "#", text: "Evil Within", image: GAMINGPOSTER3 },
  ];

  // const usrAuthentication = async () => {
  //     const token = localStorage.getItem("token")
  //     if (!token) {
  //         navigate("/signin")
  //     }
  //     let api = "http://localhost:8000/user/auth"
  //     try {
  //         const response = await axios.post(api, null, {
  //             headers: {
  //                 "auth-token": token
  //             }
  //         })
  //         console.log(response.data)
  //         localStorage.setItem("usrName",response.data.name)
  //         localStorage.setItem("usrEmail",response.data.email)
  //     }
  //     catch (err) {
  //         console.log(err)
  //     }

  // }

  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  return (
    <>
      <CustomCursor />

      {/* <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="bg-pink-600 shadow-pink-600  rounded-e-full w-full h-1 z-50 bottom-10 shadow-lg  fixed  left-0 "
      ></motion.div> */}



{/* <motion.div
  style={{
    scaleX: scrollYProgress,
    transformOrigin: "center",
  }}
  className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[90%] h-1 rounded-full bg-gradient-to-r from-pink-500 via-blue-400 to-green-600 shadow-[0_0_20px_#ff4d00,0_0_40px_#ff9100,0_0_60px_#ffcc00] animate-[fireFlow_2s_linear_infinite] z-50"
/>

 */}

 <motion.div
  style={{
    scaleX: scrollYProgress,
    transformOrigin: "center",
  }}
  className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[90%] h-[2px] rounded-full bg-gradient-to-r from-[#00F0FF] via-[#7000FF] to-[#01EF15] shadow-[0_0_15px_#00F0FF,0_0_25px_#7000FF,0_0_35px_#01EF15] animate-[beamFlow_3s_linear_infinite] z-50 opacity-90"
/>




      {/* ✅ Updated loader logic */}
      {loading && (
        <div className="loader-overlay">a
          <img src={ghostLoader} alt="Loading..." className="ghost-loader" />
        </div>
      )}

      {/*------ UP -------- */}
      <div className="arrow-bg">
        <div className="arrow" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      </div>

      <div className="homepage">
        <Futuristic />
        <PaginationCart />
        <section className="products">
          <div className="flex-box">
            <h2>
              Best Seller <span>of the week</span>
            </h2>
            <button className="cta-btn btn-2">
              Show Products <IoGameController />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="swiper-cart"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerBlue} alt="Blue Controller" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 1,
                          name: "Blue controller",
                          description: "Limited edition",
                          category: "controller",
                          price: 4000,
                          defaultImage: controllerBlue,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>Blue Controller</h4>
                  <p>₹4000</p>
                  <p>Description: Limited edition</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 1,
                          name: "Blue Controller",
                          description: "Limited edition",
                          category: "controller",
                          price: 4000,
                          defaultImage: controllerBlue,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerWhite} alt="White Controller" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 2,
                          name: "White Controller",
                          description: "Elegant all-white gaming controller",
                          category: "controller",
                          price: 4200,
                          defaultImage: controllerWhite,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>White Controller</h4>
                  <p>₹4200</p>
                  <p>Description: Elegant all-white gaming controller</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 2,
                          name: "White Controller",
                          description: "Elegant all-white gaming controller",
                          category: "controller",
                          price: 4200,
                          defaultImage: controllerWhite,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerDualTone1} alt="DualTone Controller 1" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 3,
                          name: "DualTone Controller 1",
                          description: "Sleek dual-color gaming controller",
                          category: "controller",
                          price: 4500,
                          defaultImage: controllerDualTone1,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>DualTone Controller 1</h4>
                  <p>₹4500</p>
                  <p>Description: Sleek dual-color gaming controller</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 3,
                          name: "DualTone Controller 1",
                          description: "Sleek dual-color gaming controller",
                          category: "controller",
                          price: 4500,
                          defaultImage: controllerDualTone1,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerDualTone2} alt="DualTone Controller 2" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 4,
                          name: "DualTone Controller 2",
                          description: "Premium design with ergonomic grip",
                          category: "controller",
                          price: 4600,
                          defaultImage: controllerDualTone2,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>DualTone Controller 2</h4>
                  <p>₹4600</p>
                  <p>Description: Premium design with ergonomic grip</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 4,
                          name: "DualTone Controller 2",
                          description: "Premium design with ergonomic grip",
                          category: "controller",
                          price: 4600,
                          defaultImage: controllerDualTone2,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerDuo} alt="Duo Controller" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 5,
                          name: "Duo Controller",
                          description:
                            "Bundle pack of two wireless controllers",
                          category: "controller",
                          price: 5000,
                          defaultImage: controllerDuo,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>Duo Controller</h4>
                  <p>₹5000</p>
                  <p>Description: Bundle pack of two wireless controllers</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 5,
                          name: "Duo Controller",
                          description:
                            "Bundle pack of two wireless controllers",
                          category: "controller",
                          price: 5000,
                          defaultImage: controllerDuo,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controlerRide} alt="Racing Wheel Steering" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 6,
                          name: "Racing Wheel Steering",
                          description: "Give realistic driving experience",
                          category: "controller",
                          price: 30000,
                          defaultImage: controlerRide,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>Racing Wheel Steering</h4>
                  <p>₹30000</p>
                  <p>Description: Give realistic driving experience</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 6,
                          name: "Racing Wheel Steering",
                          description: "Give realistic driving experience",
                          category: "controller",
                          price: 30000,
                          defaultImage: controlerRide,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 7 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerGrey} alt="Grey Xbox Controller" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 7,
                          name: "Grey Xbox Controller",
                          description: "Minimalist grey edition for pro gamers",
                          category: "controller",
                          price: 4400,
                          defaultImage: controllerGrey,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>Grey Xbox Controller</h4>
                  <p>₹4400</p>
                  <p>Description: Minimalist grey edition for pro gamers</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 7,
                          name: "Grey Xbox Controller",
                          description: "Minimalist grey edition for pro gamers",
                          category: "controller",
                          price: 4400,
                          defaultImage: controllerGrey,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 8 */}
            <SwiperSlide>
              <div className="product-card">
                <div className="product-img-container">
                  <img src={controllerPurple} alt="Purple Xbox Controller" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="fav-icon"
                    onClick={() =>
                      dispatch(
                        addtoFavourite({
                          id: 8,
                          name: "Purple Xbox Controller",
                          description:
                            "Futuristic purple shade for bold gamers",
                          category: "controller",
                          price: 4550,
                          defaultImage: controllerPurple,
                          qnty: 1,
                        })
                      )
                    }
                  />
                  <h4>Purple Xbox Controller</h4>
                  <p>₹4550</p>
                  <p>Description: Futuristic purple shade for bold gamers</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: 8,
                          name: "Purple Xbox Controller",
                          description:
                            "Futuristic purple shade for bold gamers",
                          category: "controller",
                          price: 4550,
                          defaultImage: controllerPurple,
                          qnty: 1,
                        })
                      )
                    }
                  >
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Box>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="subscribe-letter text">
          <div className="text-center-h1">
            <h1>Vr integration </h1>
            <h1>Game testing </h1>
            <h1>Game design</h1>
            <h1>Certified </h1>
            <h1>Verified </h1>
          </div>

          <div className="box-subs-flex">
            <div
              className="subs-box-a"
              style={{ backgroundColor: "#0B0D0E", color: "#29BE0F" }}
            >
              <div
                className="subs-flex"
                onClick={() => {
                  navigate("/controllers");
                }}
              >
                <div className="controllerlogo">
                  {/* <IoGameController /> */}
                  <img src={CardImg} style={{ width: "100px" }} />
                </div>
                <div>
                  <p>Controllers</p>
                  <p>view </p>
                </div>
              </div>
            </div>
            <div
              className="subs-box-a"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "2px solid green",
              }}
            >
              <div className="subs-flex">
                <div className="controllerlogo">
                  <img src={CardImg1} style={{ width: "100px" }} />
                </div>
                <div>
                  <p>Gaming</p>
                  <p>Accessories</p>
                </div>
              </div>
            </div>
            <div
              className="subs-box-a"
              style={{ backgroundColor: "#FFFFFF", color: "black" }}
            >
              <div
                className="subs-flex"
                onClick={() => {
                  navigate("/dvdgame");
                }}
              >
                <div className="controllerlogo">
                  <img src={CardImg2} style={{ width: "100px" }} />

                  {/* <IoGameController /> */}
                </div>

                <div>
                  <p>DVD</p>
                  <p>games</p>
                </div>
              </div>
            </div>
            <div
              className="subs-box-a"
              style={{
                backgroundColor: "#BEC6D3",
                width: "570px",
                color: "black",
              }}
            >
              <div className="subs-flex">
                <div className="controllerlogo">
                  <img
                    src={CardImg4}
                    style={{ width: "150px", boxShadow: "0px 0px 10px #000" }}
                  />
                  {/* <IoGameController /> */}
                </div>

                <div>
                  <p>PS 5</p>
                  <p>view games</p>
                </div>
              </div>
            </div>
            <div
              className="subs-box-a"
              style={{
                backgroundColor: "#01060A",
                width: "570px",
                color: "#29BE0F",
              }}
            >
              <div className="subs-flex">
                <div className="controllerlogo">
                  <img
                    src={CardImg5}
                    style={{ width: "150px", boxShadow: "0px 0px 2px #fff" }}
                  />

                  {/* <IoGameController /> */}
                </div>

                <div>
                  <p>XBOX</p>
                  <p>view games</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="detail">
          <div className="detail-flex">
            <div className="imgDetail1">
              <img src={imgDetial1}></img>
            </div>
            <div className="imgDetail2">
              <img src={imgDetial2}></img>
            </div>
            <div className="contentDetail">
              <button className="cta-btn btn-2">How We Do</button>
              <h1>
                From Pixels To Play:{" "}
                <img
                  className="spidey-float"
                  style={{ width: "230px" }}
                  src={Spidey}
                />
                <br />
                Sharing Our Story
              </h1>
              <h6>
                With hardware, tools are what enable a person to install,
                remove, or perform other actions on the components within their
                computer.
              </h6>
              <p>our gaming offerings cater to your every desire</p>
              <p>
                forge lasting friendships with like-minded gamers who share your
                passion and enthusiasm
              </p>
              <p>
                Join us in fostering a vibrant and inclusive gaming culture that
                celebrates diversity and empowers players to connect, compete,
                and grow
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>

        <div className="gta">
          <img src={gtaBg} />
        </div>
      </div>

      <section className="subscribe_letter">
        {/*  */}
        <div>
          <h1 className="subs">
            customer <span className="outline">support</span>{" "}
          </h1>
          <p style={{ fontFamily: "sans-serif" }}>
            Need help with orders, downloads, or accounts? We're here for you
            24/7 to ensure a smooth gaming experience.
          </p>
        </div>

        <div className="video-usb-flex">
          <video width={500} height={550} autoPlay loop muted>
            <source src={ControlVideo} />
          </video>

          <div className="subscribe-input-box">
            <Box className="cs-form-container">
              <Paper elevation={4} className="cs-form-paper">
                <Typography
                  variant="h5"
                  gutterBottom
                  className="cusotmer-form-title"
                >
                  Contact Customer Support
                </Typography>

                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Full Name"
                        name="name"
                        fullWidth
                        required
                        className="cs-textfield"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        fullWidth
                        required
                        className="cs-textfield"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Subject"
                        name="subject"
                        fullWidth
                        required
                        className="cs-textfield"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        className="cs-textfield"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="cs-submit-button "
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Box>
          </div>
        </div>
      </section>

      {/* <============= VIDEO TRAILER==========> */}

      <section className="video-trailer"></section>

      <section className="blog-sec">
        <div className="container-flex">
          <h1>Best Pro Gaming Blog</h1>
          <button className=" cta-btn btn-2">
            Show Products <IoGameController />{" "}
          </button>
        </div>

        <div className="box-container-flex-1">
          <div className="box-container-flex">
            <img src={blog1} />
            <h3>The Dev Dairy Season Points Boomstick Gaming</h3>
            <p>Author:workdo</p>
            <button className=" cta-btn">Read More</button>
          </div>
          <div className="box-container-flex">
            <img src={blog2} />
            <h3>The Dev Dairy Season Points Boomstick Gaming</h3>
            <p>Author:workdo</p>
            <button className=" cta-btn">Read More</button>
          </div>
          <div className="box-container-flex">
            <img src={blog3} />
            <h3>The Dev Dairy Season Points Boomstick Gaming</h3>
            <p>Author:workdo</p>
            <button className=" cta-btn">Read More</button>
          </div>
          <div className="box-container-flex">
            <img src={blog4} />
            <h3>The Dev Dairy Season Points Boomstick Gaming</h3>
            <p>Author:workdo</p>
            <button className=" cta-btn">Read More</button>
          </div>
        </div>
        <Waves
          lineColor="#700B4B"
          // backgroundColor="rgba(255, 255, 255, 0.2)"
          backgroundColor="#000"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </section>

      {/* <TEXTANIMATION/> */}
    </>
  );
};

export default Home;
