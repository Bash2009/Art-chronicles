import React from "react";
import foot1 from "../../media/image-7.jpg";

const ContactUs = () => {
  const styles = {
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) ,url(" +
      foot1 +
      ")",
    backgroundSize: "100rem",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={styles} className="row p-4 text-white" id="contactUs">
        <div className="col-12 col-md-6">
          <p className="fs-5 fw-bold text-uppercase">Contact us</p>
          <p>
            Hope You enjoyed our Chronicles of Amazing Art, You could reach out
            to us through the Our socials below
          </p>

          <div className="row mt-4">
            <span className="fa fa-phone col-1"></span>
            <span className="fa fa-facebook-square col-1"></span>
            <span className="fa fa-whatsapp col-1"></span>
            <span className="fa fa-instagram col-1"></span>
            <span className="fa fa-twitter-square col-1"></span>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-5 mt-md-2">
          <p className="text-uppercase fw-bold">Write to us</p>
          <form>
            <input
              type="text"
              className="form-control rounded-0 my-2"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control rounded-0 my-2"
              placeholder="Message"
            />
            <input
              type="submit"
              className="btn bg-dark text-white rounded-0 p-2 px-5"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
