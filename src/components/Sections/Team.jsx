import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDropbox } from "@fortawesome/free-brands-svg-icons";

import Yamini from "./ProfilePhoto/Yamini_Photo.jpeg"
import Sarvesh from "./ProfilePhoto/Sarvesh_Photo.jpeg"
import Ayush from "./ProfilePhoto/Ayush_Photo.jpeg"
import Guide from "./ProfilePhoto/Nilesh_Sir_photo.jpg"

export default function Team() {
  return (
    <Wrapper>
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Meet the Team</h1>
            <p className="font13">
              Our team has come together to create FinVise, a testament to our
              collective dedication and ingenuity.
              <br /> Despite being in the early stages of our careers, our
              diverse backgrounds in finance, technology, and design have
              enabled us to craft a user-friendly platform that aims to redefine
              how individuals approach financial planning.
            </p>
          </HeaderInfo>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <TeamMember
            name="Ayush Singh"
            title= "Student"
            imgSrc={Ayush}
            socialLinks={[
              "mailto:ayushsingh.30456@gmail.com",
              "https://www.linkedin.com/in/ayushsingh2202/",
            ]}
          />
          <TeamMember
            name="Yamini Tapde"
            title="Student"
            imgSrc= {Yamini}
            socialLinks={[
              "mailto:yaminitapde123@gmail.com",
              "https://www.linkedin.com/in/yamini-tapde-9447b320b/",
            ]}
          />
          <TeamMember
            name="Sarvesh Varade"
            title="Student"
            imgSrc= {Sarvesh}
            socialLinks={[
              "mailto:sarveshvarade873@gmail.com",
              "https://www.linkedin.com/in/sarvesh-varade/",
            ]}
          />
          <TeamMember
            name="Nilesh Shirude"
            title="Project Guide"
            imgSrc={Guide}
            socialLinks={[
              "mailto:nsshirude@pict.edu",
              "https://www.linkedin.com/in/nilesh-shirude/",
            ]}
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const TeamMember = ({ name, title, imgSrc, socialLinks }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <TeamCard>
        <div className="picture">
          <img className="img-fluid" src={imgSrc} alt={name} />
        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{title}</h4>
        </div>
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link}>
                <FontAwesomeIcon icon={getIconForLink(link)} />
              </a>
            </li>
          ))}
        </SocialLinks>
      </TeamCard>
    </div>
  );
};

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }`;

const TeamCard = styled.div`
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f5f5f5;
  text-align: center;
  overflow: hidden;
  position: relative;

  .picture {
    display: inline-block;
    height: 130px;
    width: 130px;
    margin-bottom: 50px;
    z-index: 1;
    position: relative;
  }

  .picture::before {
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: #7620ff;
    position: absolute;
    bottom: 135%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.3s linear 0s;
  }

  &:hover .picture::before {
    height: 100%;
  }

  .picture::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1369ce;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .picture img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.9s ease 0s;
  }

  &:hover .picture img {
    box-shadow: 0 0 0 14px #f7f5ec;
    transform: scale(0.7);
  }

  .title {
    display: block;
    font-size: 15px;
    color: #4e5052;
    text-transform: capitalize;
  }
`;


const SocialLinks = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 10px;
  background-color: #7620ff;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;

  ${TeamCard}:hover & {
    bottom: 0;
  }

  li {
    display: inline-block;
  }

  li a {
    display: block;
    padding: 10px;
    font-size: 17px;
    color: white;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }

  li a:hover {
    color: #1369ce;
    background-color: #f7f5ec;
  }
`;

function getIconForLink(link) {
  if (link.includes("mailto")) {
    return faDropbox;
  } else if (link.includes("linkedin")) {
    return faLinkedin;
  }
  // Return a default icon if the link doesn't match any known social media or email
  // return faEnvelope;
}
