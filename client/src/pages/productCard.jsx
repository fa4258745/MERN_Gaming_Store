






import { useState, useEffect } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackendUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "../css/ProductCard.css";
import { addtoCart } from "../CartSlice";
import { useNavigate } from "react-router-dom";
import ShinyText from "./ShinyText";

const Home = () => {
  const [mydata, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemsPerPage = 6;

  const categories = [
    { label: "All", value: "All" },
    { label: "Controller", value: "controller" },
    { label: "DVD", value: "dvd" },
    { label: "Console", value: "console" },
    { label: "Mouse & Keyboard", value: "mousekeyboard" },
    { label: "Laptop", value: "laptop" },
    { label: "Headphones", value: "headphone" },
    { label: "Gaming Chair", value: "chair" },
    { label: "CPU Parts", value: "cpupart" },
    { label: "PSP", value: "psp" },
    { label: "VR Games", value: "vrgaming" },
  ];

  const loadData = async () => {
    const api = `${BackEndUrl}/product/homedisplay`;
    try {
      const response = await axios.get(api);
      setMyData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const authCheck = async () => {
    const api = `${BackEndUrl}/user/authuser`;
    const token = localStorage.getItem("token");
    if (token) {
      const tokenResponse = await axios.post(api, null, {
        headers: { "x-auth-token": token },
      });

      if (tokenResponse.data) {
        localStorage.setItem("userValid", true);
        localStorage.setItem("username", tokenResponse.data.name);
        localStorage.setItem("useremail", tokenResponse.data.email);
        localStorage.setItem("userid", tokenResponse.data._id);
      }
    }
  };

  useEffect(() => {
    loadData();
    authCheck();
  }, []);

  const filteredData =
    selectedCategory === "All"
      ? mydata
      : mydata.filter((item) => item.category === selectedCategory);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <ShinyText
        text="OUR PREMIUM GAMING PRODUCTS "
        disabled={false}
        speed={3}
        className="custom-class "
      />

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat, index) => (
          <p
            key={index}
            className={`category-para ${
              selectedCategory === cat.value ? "active-category" : ""
            }`}
            onClick={() => handleCategoryClick(cat.value)}
            style={{ cursor: "pointer" }}
          >
            {cat.label}
          </p>
        ))}
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {currentItems.map((key, index) => (
          <Card className="game-card" key={index}>
            <div className="badge">New</div>
            <div className="wishlist-icon"></div>
            <FaHeart className="fav-icon" />
            <Card.Img
              loading="lazy"
              variant="top"
              src={key.defaultImage}
              className="game-card-img"
              onClick={() => {
                navigate(`/productdisplay/${key._id}`);
              }}
            />
            <Card.Body className="card-body-design">
              <Card.Title className="game-title">{key.name}</Card.Title>
              <Card.Text className="game-description">
                {key.description}
                <br />
                <span className="game-category">Genre: {key.category}</span>
                <h4 className="game-price">₹ {key.price}</h4>
              </Card.Text>

              <Button
                type="submit"
                variant="contained"
                className="cs-submit-button"
                onClick={() => {
                  dispatch(
                    addtoCart({
                      id: key._id,
                      name: key.name,
                      description: key.description,
                      price: key.price,
                      category: key.category,
                      images: key.images,
                      defaultImage: key.defaultImage,
                      qnty: 1,
                    })
                  );
                }}
              >
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          ⬅ Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </>
  );
};

export default Home;
