// import React, { useEffect, useState } from "react";
// import "./css/customCursor.css";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateMouse = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", updateMouse);
//     return () => {
//       document.removeEventListener("mousemove", updateMouse);
//     };
//   }, []);

//   return (
//     <>

//     <div
//       className="custom-cursor"
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//     ></div>

//     <div
//       className="custom-cursor2 custom-cursor"
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//     ></div>
//     </>

//   );
// };

// export default CustomCursor;







// import React, { useEffect, useRef } from "react";
// import "./css/customCursor.css";

// const CustomCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       const { clientX: x, clientY: y } = e;
//       requestAnimationFrame(() => {
//         if (cursorRef.current) {
//           cursorRef.current.style.left = `${x}px`;
//           cursorRef.current.style.top = `${y}px`;
//         }
//       });
//     };

//     document.addEventListener("mousemove", moveCursor);
//     return () => document.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return <div className="custom-cursor" ref={cursorRef}></div>;
// };
// export default CustomCursor;





















import React, { useEffect, useRef } from "react";
import "./css/customCursor.css";

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const trailCursor = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      if (mainCursor.current) {
        mainCursor.current.style.left = `${x}px`;
        mainCursor.current.style.top = `${y}px`;
      }

      if (trailCursor.current) {
        trailCursor.current.animate(
          [
            { left: `${trailCursor.current.style.left}`, top: `${trailCursor.current.style.top}` },
            { left: `${x}px`, top: `${y}px` },
          ],
          { duration: 100, fill: "forwards" }
        );
      }
    };

    const clickPulse = () => {
      if (!mainCursor.current) return;
      mainCursor.current.classList.add("click-pulse");
      setTimeout(() => {
        mainCursor.current.classList.remove("click-pulse");
      }, 300);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", clickPulse);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", clickPulse);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={mainCursor}></div>
      <div className="cursor-trail" ref={trailCursor}></div>
    </>
  );
};

export default CustomCursor;
