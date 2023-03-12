import React, { useState } from "react";
function Coupon(props) {
  let [state, setState] = useState(false);
  let show = () => {
    setState(!state);
  };
return (
    <div style={{ textAlign: "center" }}>
      <button className="btn btn-secondary" onClick={show}>
        Show Other Coupon
      </button>
      <div
        style={{
          display: state ? "block" : "none",
          border: "2px",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{ backgroundColor: "GrayText", marginTop: "40px" }}
        >
          <h1>Mega Discount!!</h1>
          <img
            style={{ height: "400px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5GMi_gyGHIMFHU7ubM_IdZgasnGret-Xmw&usqp=CAU"
          />
          <h3>coupon 1</h3>
          <h2>Scan For Discount</h2>
        </div>
      </div>
       <div
        className="container"
        style={{
          display: state ? "none" : "block",
          border: "2px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <div style={{ backgroundColor: "lightgrey" }}>
          <h1>Coupon 2</h1>
          <img
            style={{ height: "400px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCU7VUe_J1R3jwbZ5qavu_6FrGi88IMVkFkQ&usqp=CAU"
          />
          \<h3></h3>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
