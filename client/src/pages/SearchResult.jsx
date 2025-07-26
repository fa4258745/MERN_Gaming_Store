import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackendUrl";
import "../css/ProductCard.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../CartSlice";
import { Button, Card } from "@mui/material";

const SearchResults = () => {
  const { keyword } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BackEndUrl}/product/homedisplay`);
        const filtered = res.data.filter((item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered);
      } catch (err) {
        console.error("Search Error:", err);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <div className="product-grid">
      {filteredProducts.length === 0 ? (
        <h2 style={{ color: "white", textAlign: "center" }}>
          No products found for "{keyword}"
        </h2>
      ) : (
        filteredProducts.map((product) => (
          <Card className="game-card" key={product._id}>
            <Card.Img
              variant="top"
              src={product.defaultImage}
              onClick={() => window.location.href = `/productdisplay/${product._id}`}
              className="game-card-img"
            />
            <Card.Body className="card-body-design">
              <Card.Title className="game-title">{product.name}</Card.Title>
              <Card.Text className="game-description">
                {product.description}
                <br />
                <span className="game-category">Genre: {product.category}</span>
                <h4 className="game-price">₹ {product.price}</h4>
              </Card.Text>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  dispatch(
                    addtoCart({
                      id: product._id,
                      name: product.name,
                      description: product.description,
                      price: product.price,
                      category: product.category,
                      images: product.images,
                      defaultImage: product.defaultImage,
                      qnty: 1,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default SearchResults;
