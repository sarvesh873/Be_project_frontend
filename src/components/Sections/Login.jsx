import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { loginUser, registerUser } from "../../api/api";

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggle = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(e.target);
    const requestData = {
      username: formData.get("uname"),
      password: formData.get("subject"),
    };
    console.log("Request Data:", requestData);
    try {
      if (showSignUp) {
        await registerUser({
          first_name: formData.get("fname"),
          last_name: formData.get("lname"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          username: formData.get("uname"),
          password: formData.get("subject"),
        });
      } else {
        await loginUser(requestData.username, requestData.password);
      }
      // Handle successful login or registration here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Wrapper id="login">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <br />
            <h1 className="font40 extraBold">Login/ Sign Up</h1>
            <p className="font13">
              Unlock the full potential of our platform. <br />
              Sign up or log in now to access personalized financial insights
              and expert guidance tailored just for you.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <Form onSubmit={handleSubmit}>
                {showSignUp && (
                  <>
                    <label className="font13">First Name: </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="font15 extraBold"
                    />
                    <label className="font13">Last Name: </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="font15 extraBold"
                    />
                    <label className="font13">Email: </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="font15 extraBold"
                    />
                    <label className="font13">Phone No.: : </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="font15 extraBold"
                    />
                  </>
                )}
                <label className="font13">Username: </label>
                <input
                  type="text"
                  id="uname"
                  name="uname"
                  className="font15 extraBold"
                />
                <label className="font13">Password: </label>
                <input
                  type="password"
                  id="subject"
                  name="subject"
                  className="font15 extraBold"
                />
                <button
                  type="submit"
                  value="Submit"
                  className="pointer animate radius8"
                  style={{
                    border: "1px solid #7620ff",
                    background: "#7620ff",
                    width: "100%",
                    padding: "15px",
                    outline: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Submit{" "}
                </button>
              </Form>
              <div>
                <button
                  onClick={handleSubmit}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    marginBottom: "12px",
                  }}
                  className="font15 extraBold"
                >
                  {showSignUp
                    ? "Already have an account? Log In"
                    : "Don't have an account? Sign Up"}
                </button>
              </div>
              {/* <SumbitWrapper className="flex"> */}
              {/* <button type="submit" value="Submit" className="pointer animate radius8" style={{ maxWidth: "220px" }} > Submit </button> */}
              {/* </SumbitWrapper> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 0px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 10px;
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
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
