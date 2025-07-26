// import axios from "axios";
// import { useEffect, useState } from "react";
// import BackendUrl from "../config/BackendUrl";
// import { useNavigate } from "react-router-dom";
// import { Card } from "react-bootstrap";
// import { FaHeart } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addtoCart } from "../CartSlice";
// import { Button } from "react-bootstrap";

// const Controllers = () => {
//   const [data, setMydata] = useState([]);
//   const navigate = useNavigate();
//   const dispatch=useDispatch()

//   const loadData = async () => {
//     try {
//       const api = `${BackendUrl}/product/homedisplay`;
//       const res = await axios.get(api);
//       setMydata(res.data);
//     } catch (err) {
//       console.error("Error loading data:", err);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const filteredData = data.filter((item) => item.category === "dvd");

//   return (
//     <div>
//       {filteredData.map((item, key) => (
//         <Card className="game-card" key={item._id}>
//           <div className="badge">New</div>
//           <div className="wishlist-icon">
//             <FaHeart className="fav-icon" />
//           </div>
//           <Card.Img
//             loading="lazy"
//             variant="top"
//             src={item.defaultImage}
//             className="game-card-img"
//             onClick={() => {
//               navigate(`/productdisplay/${item._id}`);
//             }}
//           />
//           <Card.Body className="card-body-design">
//             <Card.Title className="game-title">{item.name}</Card.Title>
//             <Card.Text className="game-description">
//               {item.description}
//               <br />
//               <span className="game-category">Genre: {item.category}</span>
//               <h4 className="game-price">₹ {item.price}</h4>
//             </Card.Text>

// <Button
//   type="submit"
//   variant="contained"
//   className="cs-submit-button"
//   onClick={() => {
//     dispatch(
//       addtoCart({
//         id: item._id,
//         name: item.name,
//         description: item.description,
//         price: item.price,
//         category: item.category,
//         images: item.images,
//         defaultImage: item.defaultImage,
//         qnty: 1,
//       })
//     );
//   }}
// >
//   ADD TO CART
// </Button>

//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Controllers;














import axios from "axios";
import { useEffect, useState } from "react";
import BackendUrl from "../config/BackendUrl";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtoCart } from "../CartSlice";
import { Button } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Controllers = () => {
  const [data, setMydata] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const api = `${BackendUrl}/product/homedisplay`;
      const res = await axios.get(api);
      setMydata(res.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData = data.filter((item) => item.category === "dvd");

  return (
    <>
<div style={{backgroundColor:"black"}}>

    <div className="swiper-container" style={{ padding: "20px" }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredData.map((item) => (
          <SwiperSlide key={item._id}>
            <Card className="game-card">
              <div className="badge">New</div>
              <div className="wishlist-icon">
                <FaHeart className="fav-icon" />
              </div>
              <Card.Img
                loading="lazy"
                variant="top"
                src={item.defaultImage}
                className="game-card-img"
                onClick={() => navigate(`/productdisplay/${item._id}`)}
              />
              <Card.Body className="card-body-design">
                <Card.Title className="game-title">{item.name}</Card.Title>
                <Card.Text className="game-description">
                  {item.description}
                  <br />
                  <span className="game-category">
                    Genre: {item.category}
                  </span>
                  <h4 className="game-price">₹ {item.price}</h4>
                </Card.Text>

                <Button
                  type="submit"
                  variant="contained"
                  className="cs-submit-button"
                  onClick={() => {
                    dispatch(
                      addtoCart({
                        id: item._id,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        category: item.category,
                        images: item.images,
                        defaultImage: item.defaultImage,
                        qnty: 1,
                      })
                    );
                  }}
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</div>

    </>

  );
};

export default Controllers;
