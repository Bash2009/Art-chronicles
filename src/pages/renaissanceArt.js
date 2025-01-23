import React from "react";
import NavBar from "./components/navBar";
import MainHead from "./components/mainHead";
import head1 from "../media/image-24.jpg";
import pic1 from "../media/image-5.jpg";
import pic2 from "../media/image-20.jpg";
import pic3 from "../media/image-21.jpg";
import pic4 from "../media/image-4.jpg";
import pic5 from "../media/image-22.jpg";
import pic6 from "../media/image-24.jpg";
import pic7 from "../media/image-19.jpg";
import pic8 from "../media/image-23.jpg";
import pic9 from "../media/image-25.jpg";
import Cards from "./components/cards";
import ContactUs from "./components/contactUs";

const RenaissanceArt = () => {
  return (
    <>
      <NavBar id="nav1" />
      <MainHead
        img={head1}
        title="Renaissance Art"
        btn="Explore"
        smhead="Art Chronicles bring you"
        smclasses="text-center mt-3 fw-bold text-dark"
      >
        The gallery is sure to take you back to the time of the old masters
      </MainHead>

      <div className="row mx-auto p-3 pt-4 col-md-11 col-lg-10">
        <div className="col-12 col-md-6 col-lg-5 row mx-auto">
          <Cards name="The school of athens" col="col-12" img={pic1}>
            by Raphael
          </Cards>
          <Cards name="The last supper" col="col-12" img={pic2}>
            by Leonardo da Vinci
          </Cards>
        </div>

        <Cards name="The monalisa" col="col-12 col-md-6 col-lg-5" img={pic3}>
          by Leonardo da Vinci Raphael
        </Cards>

        <Cards name="Pieta" col="col-12 col-md-7 col-lg-6" img={pic4}>
          by Michelangelo
        </Cards>
        <Cards name="David" col="col-12 col-md-5 col-lg-4" img={pic5}>
          by Michelangelo
        </Cards>

        <Cards
          name="The creation of Adam"
          col="col-12 col-md-10 col-lg-9yy"
          img={pic6}
        >
          by Michelangelo
        </Cards>

        <div className="col-12 col-md-5 col-lg-4 p-0 row mx-auto">
          <Cards name="Moses" col="col-12" img={pic7}>
            by Michelangelo
          </Cards>
          <Cards name="Raphael rooms" col="col-12" img={pic8}>
            by Raphael
          </Cards>
        </div>

        <Cards
          name="Lady with an Ermine"
          col="col-10 col-md-6 p-0"
          img={pic9}
        >
          by Leonardo da Vinci
        </Cards>
      </div>

      <ContactUs />
    </>
  );
};

export default RenaissanceArt;
