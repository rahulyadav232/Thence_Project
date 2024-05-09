import React,{useState, useEffect} from "react";
import tick_round from "../../assets/tick_round.png";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./End_Page.css";

const EndPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(4); // Initial countdown value
  
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        if (countdown === 1) {
          navigate("/"); // Redirect to the homepage when countdown reaches 1
        } else {
          setCountdown(countdown - 1); // Decrement countdown value
        }
      }, 1000); // 1 second
  
      return () => {
        clearTimeout(redirectTimeout); // Clear the timeout if the component unmounts before the timeout
      };
    }, [navigate, countdown]);
  

  return (
    <div>
      <div className="signup-header">
        <div className="signup-image">
          <img src={logo} alt="brunel" />
        </div>
      </div>

      <div className="task-completed">
        <div className="tick">
          <img src={tick_round} alt="tick"></img>
        </div>
        <div className="submission">
          <h2>Success Submitted</h2>
        </div>
        <div className="congrats">
          <div className="congratulation">
            <h1>Congratulations</h1>
          </div>
          <div>
            <h4 className="summary">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </h4>
          </div>
        </div>
      </div>

      <div className="redirect">
        Redirecting you to Homepage in <span className="span">{countdown}</span>
      </div>
    </div>
  );
};

export default EndPage;
