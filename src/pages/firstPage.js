import React from "react";
import NavBar from "./components/navBar";
import MainHead from "./components/mainHead";
import Categories from "./components/artCategories";
import PopularArts from "./components/popularArts";
import ContactUs from "./components/contactUs";
import head1 from "../media/image-1.jpg";
import head2 from "../media/image-5.jpg";

const FirstPage = () => {
  return (
    <>
      <NavBar id="nav1" />
      <MainHead img={head1} title="Art Chronicles" btn="Lets explore">
        Welcome to Art Chronicles a digital space dedicated to showcasing the
        finest art pieces from the Renaissance and Modern era
      </MainHead>
      <Categories />

      <MainHead
        img={head2}
        title="Art Chronicles"
        btn="Discover art"
        smhead="About"
        smclasses="text-center mt-3 fw-bold text-uppercase"
      >
        Art Chronicles is a digital gallery where Renaissance Meets Modernity.
        It is aimed at discovering the timeless beauty of Renaissance and Modern
        art
      </MainHead>
      <PopularArts />

      <ContactUs />
    </>
  );
};

export default FirstPage;
