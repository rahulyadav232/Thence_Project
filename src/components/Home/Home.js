import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import photo from "../../assets/photo.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";
import Union from "../../assets/Union.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const getProject = () => {
    navigate("/registration");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-image">
          <img src={logo} alt="brunel" />
        </div>
        <div className="nav-buttons">
          <button className="nav-projects" type="button" onClick={getProject}>
            Get projects
          </button>
          <button className="nav-onboard" type="button">
            <p className="nav-onboard-text">Onboard Talent</p>
          </button>
        </div>
      </div>
      <div className="first-page">
        <div className="main-page">
          <div className="sucess-page">
            <div className="sucess-story">
              <h2>Success stories</h2>
            </div>
            <div className="journey">
              <h1>Every success journey we’ve encountered.</h1>
            </div>
          </div>

          <div className="arch">
            <img className="photo" src={photo} alt="" />
            <img className="frame1" src={frame1} alt="" />
            <img className="frame2" src={frame2} alt="" />
            <img className="frame3" src={frame3} alt="" />
          </div>

          <div className="top-company">
            <p>
              Enhance fortune 50 company’s insights teams research capabilities
            </p>
            <img className="frame" src={frame4} alt="" />
          </div>

          <div>
            <button className="explore">Explore more</button>
          </div>
        </div>
      </div>

      <div className="second-page">
        <div className="left-column">
          <p className="left-quote">What’s on your mind</p>
          <p className="left-quote-1">Ask Questions</p>
          <div className="Union-logo">
            <img src={Union} />
          </div>
        </div>

        <div className="right-column">
          <p className="right-text">
            Do you offer freelancers?
            <img className="plus" src={frame5} />
          </p>
          <hr className="horizental-line" />

          <p className="right-text-1">
            <h2 className="right-span">
              What’s the guarantee that I will be satisfied with the hired
              talent?
            </h2>
            <img className="plus" src={frame5} />
          </p>
          <hr className="horizental-line" />
          <p className="right-text-2">
            Can I hire multiple talents at once?
            <img className="plus" src={frame6} />
          </p>
          <p className="right-subpart">
            If unhappy with a project, communicate with the freelancer, allow
            for revisions, and refer to the agreement. Escalate to platform
            support if needed, considering mediation. Review policies, seek
            collaborative solutions for resolution.
          </p>
          <hr className="horizental-line" />
          <p className="right-text-3">
            Why should I not go to an agency directly?
            <img className="plus" src={frame5} />
          </p>
          <hr className="horizental-line" />
          <p className="right-text-4">
            Who can help me pick a right skillset and duration for me?
            <img className="plus" src={frame5} />
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="footer-discription">
          <h2 className="text-muted">© Talup 2023. All rights reserved</h2>
          <span className="text-muted-1">Terms & Conditions</span>
          <span className="text-muted-1">Privacy Policy</span>
        </div>
      </div>
    </>
  );
};

export default Home;
