import React from "react";
import ThreeCardLayout from "./threeCardLayout";
import pic1 from "../../media/image-13.jpg";
import pic2 from "../../media/image-12.jpg";
import pic3 from "../../media/image-4.jpg";
import pic4 from "../../media/image-6.jpg";

const PopularArts = () => {
  return (
    <>
      <div className="p-3 row">
        <p className="h3 text-center my-3 mb-4 fw-bold">Popular Arts</p>
        <ThreeCardLayout pic1={pic1} pic2={pic2} pic3={pic3} />

        <img src={pic4} className="col-10 col-md-9 mx-auto" />
      </div>
    </>
  );
};

export default PopularArts;
