import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import axios for making HTTP requests

// Assets
import ContactImg1 from "../../assets/img/contact-1.jpg";
import ContactImg2 from "../../assets/img/contact-2.jpg";
import ContactImg3 from "../../assets/img/contact-3.jpg";
import Swal from "sweetalert2";
export default function Contact() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    subject: "",
    description: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to your API endpoint
    axios
      .post(
        "https://web-production-98b9a.up.railway.app/api/feedback/",
        formData
      )
      .then((response) => {
        // alert("Message sent successfully!");
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          toast: true,
          text: 'Your message has been sent successfully.',
          timer: 3000, // Show message for 3 seconds
          timerProgressBar: true,
          position: "top-right",
          showConfirmButton: false,
        });
        setFormData({
          first_name: "",
          email: "",
          subject: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error); // Log any errors that occur
        
        Swal.fire({
          icon: 'error',
          toast: true,
          title: 'Oops...',
          text: 'Failed to send message. Please try again.',
          timer: 3000, 
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Contact us today to embark on your journey towards financial
              empowerment and
              <br />
              secure your future with personalized guidance and expert advice.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit}>
                {" "}
                {/* Call handleSubmit function on form submission */}
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="font20 "
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 "
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label className="font13">Describe:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="description"
                  name="description"
                  className="font20 "
                  value={formData.description}
                  onChange={handleChange}
                />
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    className="pointer animate radius8"
                    style={{
                      maxWidth: "220px",
                      backgroundColor: "#7620ff",
                      border: "1px solid #7620ff", // Added border property
                      width: "100%",
                      height: "100%",
                      padding: "15px",
                      outline: "none",
                      color: "#fff",
                    }}
                    hoverStyle={{
                      backgroundColor: "#580cd2",
                      border: "1px solid #7620ff",
                      color: "#fff",
                    }}
                    mediaStyle={{
                      margin: "0 auto",
                    }}
                  />
                </SumbitWrapper>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
