import React from "react";
import NavBar from "./components/navBar";
import MainHead from "./components/mainHead";
import pic1 from "../media/image-15.jpg";
import pic2 from "../media/image-17.jpg";
import pic3 from "../media/image-11.jpg";
import pic4 from '../media/image-13.jpg';
import pic5 from "../media/image-14.jpg";
import pic6 from "../media/image-12.jpg";
import pic7 from "../media/image-9.jpg";
import pic8 from "../media/image-18.jpg";
import pic9 from "../media/image-16.jpg";
import pic10 from "../media/image-10.jpg";
import Cards from "./components/cards";
import ContactUs from "./components/contactUs";

const ModernArts = () => {
  return (
    <>
      <NavBar id="nav1" />
      <MainHead
        img={pic1}
        title="Modern Art"
        btn="Explore"
        smhead="Art Chronicles bring You"
        smclasses="text-center fw-bold text-dark my-2"
      >
        Welcome to Art Chronicles a digital space dedicated to showcasing the
        finest art pieces from the Renaissance and Modern era
      </MainHead>

      <div className="p-3 row mx-auto col-md-11 col-lg-10">
        <Cards img={pic2} name="Identity" col="col-12 col-md-4">
          Digital Art by Josh Hermanos
        </Cards>
        <Cards img={pic3} name="New news" col="col-12 col-md-8">
          Digital Illustration by Sam Youn
        </Cards>

        <Cards
          img={pic4}
          name="Abstract of blue and orange"
          col="col-12 col-md-6"
        >
          Anonymous Mysterious art
        </Cards>
        <Cards img={pic5} name="Heights" col="col-12 col-md-6">
          Photograph Art by Lewis
        </Cards>

        <Cards img={pic6} name="The starry night" col="col-12 col-md-7">
          Anonymous Mysterious art
        </Cards>
        <Cards img={pic7} name="The comedian" col="col-12 col-md-5">
          Photograph Art by Lewis
        </Cards>

        <Cards img={pic8} name="The shot" col="col-12 col-md-4">
          Photograph Art by Frederick Morales
        </Cards>
        <Cards img={pic9} name="The beauty of grey" col="col-12 col-md-4">
          Photograph Art by Sarah Christian
        </Cards>
        <Cards img={pic10} name="Girl before mirror" col="col-12 col-md-4">
          By Pablo Picasso
        </Cards>
      </div>

      <ContactUs />
    </>
  );
};

export default ModernArts;
