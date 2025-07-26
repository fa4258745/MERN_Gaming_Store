import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackendUrl";
import axios from "axios";
import "../css/ProductDisplay.css"
import { useDispatch } from "react-redux";
import { addtoCart } from "../CartSlice";
import { Button } from "@mui/material"; 
const ProductDisplay = () => {
    const dispatch=useDispatch();
    const { id } = useParams();
    const [mydata, setMydata] = useState({});
    const [imglist, setimgList] = useState([]);
    const [DefaultImage, SetDefaultImage] = useState("");

    console.log(imglist);
    
    const loadData = async () => {
        let api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
            setimgList(response.data.images);
            SetDefaultImage(response.data.defaultImage);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, [])


     const ans = imglist.map((key) => {
        return (
            <>
                <img src={key} width="50" height="50" style={{border:"5px solid lightblue", margin:"5px"}}
                onMouseOver={()=>{SetDefaultImage(key)}} />
                <br/>
            </>
        )
    })

    return (
        <>

  <div id="prodisplay" className="glow-border">
      <h1>Product Display</h1>

        <div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:"40px"}}>
      <div className="pro-container">
        <div className="img-preview-thumbs">
          {imglist.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              onMouseOver={() => SetDefaultImage(img)}
            />
          ))}
        </div>


      </div>
        <div className="main-product-img">
          <img src={DefaultImage} alt="Main product" />
        </div>

      <div className="product-details">
        <h1>Product Name: {mydata.name}</h1>
        <h2>Price: ₹{mydata.price}</h2>
        <p>{mydata.description}</p>

  <Button
          variant="contained"
          color="secondary"
          
          onClick={() =>
            dispatch(
              addtoCart({
                id: mydata._id,
                name: mydata.name,
                description: mydata.description,
                price: mydata.price,
                category: mydata.category,
                images: mydata.images,
                defaultImage: mydata.defaultImage,
                qnty: 1,
              })
            )
          }
        >
          Add to Cart
        </Button>          
      </div>
    </div>
        </div>


        </>
    )
}
export default ProductDisplay;




