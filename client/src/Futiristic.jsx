// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import { useEffect, useState } from "react";
// import "./FutnikUI.css";
// import profile from "./images/PARALLEX2.png";
// import hoodie1 from "./images/COLLECTIONS/Battlefield_3.jpg";
// import hoodie2 from "./images/COLLECTIONS/call-of-duty-modern-warfare-2-2022-games-call-of-duty-3840x2160-8580.jpg";
// import hoodie3 from "./images/COLLECTIONS/Crysis_3.jpg";
// import hoodie4 from "./images/COLLECTIONS/EvilWIthin.jpg";
// import hoodie5 from "./images/COLLECTIONS/FarCry_Primal.jpg";
// import hoodie6 from "./images/COLLECTIONS/RE_Village.jpg";

// import monitor from "./images/bg-3d.png";
// import controller from "./images/d27ae213-e5df-4877-a743-422f9fb61a7b.png";
// import headphone from "./images/PARALLEX.png";



// import ShinyText from './ShinyText';
// import GradientText from './GradientText.jsx'
  



// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Swiper modules
// import { Navigation, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { useDispatch } from "react-redux";
// import { addtoCart } from "./CartSlice";

// const Futiristic = () => {
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const dispatch = useDispatch();
//   const hoodieProducts = [
//     {
//       id: 201,
//       name: "Battlefield 3",
//       description: "High-octane modern FPS",
//       category: "Shooter",
//       price: 799,
//       defaultImage: hoodie1,
//     },
//     {
//       id: 202,
//       name: "COD MW 2",
//       description: "Tactical modern warfare",
//       category: "Shooter",
//       price: 999,
//       defaultImage: hoodie2,
//     },
//     {
//       id: 203,
//       name: "Crysis 3",
//       description: "Sci-fi stealth shooter",
//       category: "Sci-Fi",
//       price: 899,
//       defaultImage: hoodie3,
//     },
//     {
//       id: 204,
//       name: "Evil Within",
//       description: "Psychological horror shooter",
//       category: "Horror",
//       price: 699,
//       defaultImage: hoodie4,
//     },
//     {
//       id: 205,
//       name: "Far Cry Primal",
//       description: "Stone age action adventure",
//       category: "Adventure",
//       price: 849,
//       defaultImage: hoodie5,
//     },
//     {
//       id: 206,
//       name: "RE Village",
//       description: "Gothic survival horror",
//       category: "Horror",
//       price: 1099,
//       defaultImage: hoodie6,
//     },
//   ];

//   const handleMouseMove = (e) => {
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//     const x = (e.clientX - centerX) / 25;
//     const y = (e.clientY - centerY) / 25;
//     setOffset({ x, y });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="futnik-container">
//       <header className="futnik-header">
//         <h1 className="brand">
//         </h1>
//         <div className="menu">Menu &#9776;</div>
//       </header>

//       <section className="hero">
//         <div className="hero-left">
//           <div className="hero-text">
//             <h2 className="title">
//               <div className="bestGaming">



//           <GradientText
//   colors={["#29BE0F", "#000000", "#722E6D", "#000000", "#000"]}
//   animationSpeed={8}
//   showBorder={false}
//   className="custom-class"
// >


//                 <span className="outlined">BE</span>
//                 <span className="filled">ST</span>
//                 <br/>
//                 <span className="outlined">GAM</span>
//                 <span className="filled">ING</span>
//                 <br/>
//                 <span className="outlined">ACCES</span>
//                 <span className="filled">SORIES</span>
// </GradientText>

  
//               </div>
//               <div className="bestGaming">
//               </div>
//               <div className="bestGaming">
//               </div>
//             </h2>
//           </div>

//           <img
//             src={monitor}
//             alt="Monitor"
//             className="monitor"
//             style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
//           />
//           <img
//             src={controller}
//             alt="Controller"
//             className="controller"
//             style={{
//               transform: `translate(${offset.x * 1.9}px, ${offset.y * 1.9}px)`,
//             }}
//           />
//           <img
//             src={headphone}
//             alt="Headphone"
//             className="headphone"
//             style={{
//               transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)`,
//             }}
//           />
//         </div>

//         <div className="glass-card">
//           <p style={{ color: "white", fontSize: "50px" }}>FUTU</p>
//           <p style={{ color: "white", fontSize: "50px" }}>RISTIC</p>

//         </div>


        
//         <div className="hero-right">
//           <img
//             src={profile}
//             alt="Profile"
//             className="profile"
//             style={{
//               transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)`,
//             }}
//           />
//         </div>

//       </section>

//       <section className="collection">
//         <div className="top-pick">
//           <h3 style={{ marginTop: "20px" }}>Top Pick For You.</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipiscing eiusmod de eiusmod
//             tempor
//             <br /> incididunt ut labore et dolore magna aliqua.
//           </p>

//           {/* Swiper Image Carousel */}
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={3}
//             navigation
//             pagination={{ clickable: true }}
//             modules={[Navigation, Pagination]}
//             className="game-swiper"
//           >
//             {/* <SwiperSlide>
//               <img src={hoodie1} alt="Battlefield 3" className="Hoodie1" />
//               <p>Battlefield 3</p>
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={hoodie2} alt="COD MW 2" className="Hoodie2" />
//               <p>COD MW 2</p>
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={hoodie3} alt="Crysis 3" className="Hoodie3" />
//               <p>Crysis 3</p>
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={hoodie4} alt="Evil Within" className="Hoodie4" />
//               <p>Evil Within</p>
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={hoodie5} alt="Far Cry Primal" className="Hoodie5" />
//               <p>Far Cry Primal</p>
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={hoodie6} alt="RE Village" className="Hoodie6" />
//               <p>RE Village</p>
//             </SwiperSlide> */}

//             <Swiper
//               spaceBetween={30}
//               slidesPerView={3}
//               navigation
//               pagination={{ clickable: true }}
//               modules={[Navigation, Pagination]}
//               className="game-swiper"
//             >
//               {hoodieProducts.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <div className="slide-container">
//                     <div className="slide-wrapper">
//                       <img
//                         src={product.defaultImage}
//                         alt={product.name}
//                         className="HoodieImg"
//                       />
//                       <div className="hover-overlay">
//                         <button
//                           onClick={() =>
//                             dispatch(addtoCart({ ...product, qnty: 1 }))
//                           }
//                         >
//                           <Fab size="small" color="secondary" aria-label="add">
//                             <AddIcon />
//                           </Fab>
//                         </button>
//                       </div>
//                     </div>
//                     <p>{product.name}</p>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </Swiper>

//           <button className="view-btn">Top Collection</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Futiristic;





















// Futiristic.jsx
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import "./FutnikUI.css";
import profile from "./images/PARALLEX2.png";
import hoodie1 from "./images/COLLECTIONS/Battlefield_3.jpg";
import hoodie2 from "./images/COLLECTIONS/call-of-duty-modern-warfare-2-2022-games-call-of-duty-3840x2160-8580.jpg";
import hoodie3 from "./images/COLLECTIONS/Crysis_3.jpg";
import hoodie4 from "./images/COLLECTIONS/EvilWIthin.jpg";
import hoodie5 from "./images/COLLECTIONS/FarCry_Primal.jpg";
import hoodie6 from "./images/COLLECTIONS/RE_Village.jpg";
import monitor from "./images/bg-3d.png";
import controller from "./images/d27ae213-e5df-4877-a743-422f9fb61a7b.png";
import headphone from "./images/PARALLEX.png";
import ShinyText from './ShinyText';
import GradientText from './GradientText.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { addtoCart } from "./CartSlice";

const Futiristic = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();
  const hoodieProducts = [
    { id: 201, name: "Battlefield 3", description: "High-octane modern FPS", category: "Shooter", price: 799, defaultImage: hoodie1 },
    { id: 202, name: "COD MW 2", description: "Tactical modern warfare", category: "Shooter", price: 999, defaultImage: hoodie2 },
    { id: 203, name: "Crysis 3", description: "Sci-fi stealth shooter", category: "Sci-Fi", price: 899, defaultImage: hoodie3 },
    { id: 204, name: "Evil Within", description: "Psychological horror shooter", category: "Horror", price: 699, defaultImage: hoodie4 },
    { id: 205, name: "Far Cry Primal", description: "Stone age action adventure", category: "Adventure", price: 849, defaultImage: hoodie5 },
    { id: 206, name: "RE Village", description: "Gothic survival horror", category: "Horror", price: 1099, defaultImage: hoodie6 },
  ];

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (e.clientX - centerX) / 25;
    const y = (e.clientY - centerY) / 25;
    setOffset({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="futnik-container">
      <header className="futnik-header">
        <h1 className="brand"></h1>
        <div className="menu">Menu &#9776;</div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h2 className="title">
              <div className="bestGaming">
                <GradientText
                  colors={["#29BE0F", "#000000", "#722E6D", "#000000", "#000"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="custom-class"
                >
                  <span className="outlined">BE</span>
                  <span className="filled">ST</span>
                  <br />
                  <span className="outlined">GAM</span>
                  <span className="filled">ING</span>
                  <br />
                  <span className="outlined">ACCES</span>
                  <span className="filled">SORIES</span>
                </GradientText>
              </div>
            </h2>
          </div>

          <img src={monitor} alt="Monitor" className="monitor" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }} />
          <img src={controller} alt="Controller" className="controller" style={{ transform: `translate(${offset.x * 1.9}px, ${offset.y * 1.9}px)` }} />
          <img src={headphone} alt="Headphone" className="headphone" style={{ transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)` }} />
        </div>

        <div className="glass-card">
          <p style={{ color: "white", fontSize: "50px" }}>FUTU</p>
          <p style={{ color: "white", fontSize: "50px" }}>RISTIC</p>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Profile" className="profile" style={{ transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)` }} />
        </div>
      </section>

      <section className="collection">
        <div className="top-pick">
          <h3 style={{ marginTop: "20px" }}>Top Pick For You.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eiusmod de eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>

          <Swiper
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="game-swiper"
          >
            {hoodieProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="slide-container">
                  <div className="slide-wrapper">
                    <img
                      src={product.defaultImage}
                      alt={product.name}
                      className="HoodieImg"
                    />
                    <div className="hover-overlay">
                      <button onClick={() => dispatch(addtoCart({ ...product, qnty: 1 }))}>
                        <Fab size="small" color="secondary" aria-label="add">
                          <AddIcon />
                        </Fab>
                      </button>
                    </div>
                  </div>
                  <p>{product.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="view-btn">Top Collection</button>
        </div>
      </section>
    </div>
  );
};

export default Futiristic;