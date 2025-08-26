// import { useSelector, useDispatch } from "react-redux";
// import Table from 'react-bootstrap/Table';
// import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import { dataIncrease, dataDecrease } from "./FavourtieSlice";
// import "./css/favourite.css";

// const FavouriteData = () => {
//   const favouriteData = useSelector(state => state.myfavourite.favourite);
//   const dispatch = useDispatch();

//   const rows = favouriteData.map((item) => (
//     <tr key={item.id} className="cartdata-row">
//       <td>
//         <img src={item.defaultImage} alt={item.name} className="cartdata-img" />
//       </td>
//       <td className="product-name">{item.name}</td>
//       <td className="product-desc">{item.description}</td>
//       <td>{item.category}</td>
//       <td className="product-price">₹{item.price}</td>
//       <td>
//         <div className="quantity-control">
//           <FaPlusCircle
//             className="cartdata-icon"
//             onClick={() => dispatch(dataIncrease({ id: item.id }))}
//           />
//           <span className="qnty">{item.qnty}</span>
//           <FaMinusCircle
//             className="cartdata-icon"
//             onClick={() => dispatch(dataDecrease({ id: item.id }))}
//           />
//         </div>
//       </td>
//       <td className="total-price">₹{(item.qnty * item.price).toFixed(2)}</td>
//     </tr>
//   ));

//   return (
//     <div className="cartdata-container">
//       <h1 className="cartdata-heading">🎮 Your Favourites</h1>
//       <Table striped bordered hover className="cartdata-table">
//         <thead className="cartdata-thead">
//           <tr>
//             <th>Image</th>
//             <th>Product Name</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody className="cartdata-tbody">{rows}</tbody>
//       </Table>
//     </div>
//   );
// };

// export default FavouriteData;

// import { useSelector, useDispatch } from "react-redux";
// import { FaPlusCircle, FaMinusCircle, FaShoppingCart } from "react-icons/fa";
// import { dataIncrease, dataDecrease } from "./FavourtieSlice";
// import { addtoCart } from "./CartSlice";
// import "./css/favourite.css";

// const FavouriteData = () => {
//   const favouriteData = useSelector((state) => state.myfavourite.favourite);
//   const dispatch = useDispatch();

//   return (
//     <div className="fav-container">
//       <h2 className="fav-heading">🔥 Your Favourites</h2>
//       <div className="fav-card-wrapper">
//         {favouriteData.map((item) => (
//           <div className="fav-card" key={item.id}>
//             <img src={item.defaultImage} alt={item.name} className="fav-img" />
//             <h3 className="fav-name">{item.name}</h3>
//             <p className="fav-desc">{item.description}</p>
//             <p className="fav-cat">{item.category}</p>
//             <p className="fav-price">₹{item.price}</p>

//             <div className="fav-qnty-control">
//               <FaMinusCircle
//                 className="fav-icon"
//                 onClick={() => dispatch(dataDecrease({ id: item.id }))}
//               />
//               <span className="fav-qnty">{item.qnty}</span>
//               <FaPlusCircle
//                 className="fav-icon"
//                 onClick={() => dispatch(dataIncrease({ id: item.id }))}
//               />
//             </div>

//             <p className="fav-total">Total: ₹{(item.qnty * item.price).toFixed(2)}</p>

//             <button
//               className="fav-addtocart-btn"
//               onClick={() => dispatch(addtoCart(item))}
//             >
//               <FaShoppingCart /> Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavouriteData;

// import { useSelector, useDispatch } from "react-redux";
// import { FaPlusCircle, FaMinusCircle, FaShoppingCart } from "react-icons/fa";
// import { dataIncrease, dataDecrease } from "./FavourtieSlice";
// import { addtoCart } from "./CartSlice";
// import "./css/favourite.css";
// import { useState } from "react";

// const FavouriteData = () => {
//   const favouriteData = useSelector((state) => state.myfavourite.favourite);
//   const dispatch = useDispatch();

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;

//   const totalPages = Math.ceil(favouriteData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = favouriteData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handlers
//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   return (
//     <div className="fav-container">
//       <h2 className="fav-heading"> Your Favourites</h2>

//       <div className="fav-card-wrapper">
//         {currentItems.map((item) => (
//           <div className="fav-card" key={item.id}>
//             <img src={item.defaultImage} alt={item.name} className="fav-img" />
//             <h3 className="fav-name">{item.name}</h3>
//             <p className="fav-desc">{item.description}</p>
//             <p className="fav-cat">{item.category}</p>
//             <p className="fav-price">₹{item.price}</p>

//             <div className="fav-qnty-control">
//               <FaMinusCircle
//                 className="fav-icon"
//                 onClick={() => dispatch(dataDecrease({ id: item.id }))}
//               />
//               <span className="fav-qnty">{item.qnty}</span>
//               <FaPlusCircle
//                 className="fav-icon"
//                 onClick={() => dispatch(dataIncrease({ id: item.id }))}
//               />
//             </div>

//             <p className="fav-total">Total: ₹{(item.qnty * item.price).toFixed(2)}</p>

//             <button
//               className="fav-addtocart-btn"
//               onClick={() => dispatch(addtoCart(item))}
//             >
//               <FaShoppingCart /> Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="pagination-container">

//       <div className="fav-pagination">
//         <button className="fav-page-btn" onClick={handlePrev} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <span className="fav-page-number">Page {currentPage} of {totalPages}</span>
//         <button className="fav-page-btn" onClick={handleNext} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//       </div>
//   );
// };

// export default FavouriteData;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart } from "./CartSlice";
// import { removeFromFavourites } from "./FavourtieSlice";
// import { FaShoppingCart, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import "./css/favourite.css";

// const FavouriteData = () => {
//   const dispatch = useDispatch();
//   const favouriteData = useSelector((state) => state.myfavourite.favourite);

//   return (
//     <div className="fav-container">
//       <h2 className="fav-heading"> MY FAVOURITE</h2>

//       <div className="fav-card-wrapper">
//         {favouriteData.length === 0 ? (
//           <p style={{ color: "white", textAlign: "center" }}>
//             No favourite items found.
//           </p>
//         ) : (
//           favouriteData.map((item) => (
//             <div className="fav-card" key={item.id}>
//               <img
//                 src={item.defaultImage || item.image}
//                 alt={item.name}
//                 className="fav-img"
//               />
//               <h3 className="fav-name">{item.name}</h3>
//               <p className="fav-desc">{item.description}</p>
//               <p className="fav-cat">Category: {item.category}</p>
//               <p className="fav-price">₹{item.price}</p>

//               <div className="fav-qnty-control">
//                 <FaMinusCircle
//                   className="fav-icon minus"
//                   onClick={() =>
//                     dispatch(removeFromFavourites({ id: item.id }))
//                   }
//                 />
//                 {/* <span className="fav-qnty">{item.qnty || 1}</span>
//                 <FaPlusCircle
//                   className="fav-icon"
//                   onClick={() => dispatch(dataIncrease({ id: item.id }))}
//                 /> */}
//               </div>

//               <p className="fav-total">
//                 Total: ₹{((item.qnty || 1) * item.price).toFixed(2)}
//               </p>

//               <button
//                 className="fav-addtocart-btn"
//                 onClick={() => dispatch(addtoCart(item))}
//               >
//                 <FaShoppingCart /> Add to Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavouriteData;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./CartSlice";
import { removeFromFavourites } from "./FavourtieSlice";
import { FaShoppingCart, FaMinusCircle } from "react-icons/fa";
import "./css/favourite.css";

const FavouriteData = () => {
  const dispatch = useDispatch();
  const favouriteData = useSelector((state) => state.myfavourite.favourite);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(favouriteData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favouriteData.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="fav-container">
      <h2 className="fav-heading">MY FAVOURITE</h2>

      <div className="fav-card-wrapper">
        {favouriteData.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No favourite items found.
          </p>
        ) : (
          currentItems.map((item) => (
            <div className="fav-card" key={item.id}>
              <img
                src={item.defaultImage || item.image}
                alt={item.name}
                className="fav-img"
              />
              <h3 className="fav-name">{item.name}</h3>
              <p className="fav-desc">{item.description}</p>
              <p className="fav-cat">Category: {item.category}</p>
              <p className="fav-price">₹{item.price}</p>

              <div className="fav-qnty-control">
                <FaMinusCircle
                  className="fav-icon minus"
                  onClick={() =>
                    dispatch(removeFromFavourites({ id: item.id }))
                  }
                />
              </div>

              <p className="fav-total">
                Total: ₹{((item.qnty || 1) * item.price).toFixed(2)}
              </p>

              <button
                className="fav-addtocart-btn"
                onClick={() => dispatch(addtoCart(item))}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {favouriteData.length > itemsPerPage && (
        <div className="pagination-controls">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            ⬅ Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default FavouriteData;
