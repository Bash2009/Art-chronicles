import React from "react";
import Category from "./category";
import cat1 from "../../media/image-2.png";
import cat2 from "../../media/image-3.png";

const Categories = () => {
  return (
    <>
      <div className="p-3">
        <p className="h3 text-center my-3 mb-4 fw-bold">Art categories</p>

        <div className="row">
          <Category logo={cat1} title="Modern Art" link="/modernArt">
            Art that breaks tradition, embracing new styles and ideas from the
            late 19th century onward
          </Category>
          <Category logo={cat2} title="Renaissance Art" link="/renaissanceArt">
            Art from the 14th-17th Century focused on realism, human beauty and
            classical themes
          </Category>
        </div>
      </div>
    </>
  );
};

export default Categories;
