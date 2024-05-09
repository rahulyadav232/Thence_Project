import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import logo from "../../assets/logo.png";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [userRegistration, setUserRegistration] = useState({
    fullname: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validation logic for each field
    if (userRegistration.fullname.length < 3) {
      newErrors.fullname = "Full Name must be at least 3 characters";
      valid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userRegistration.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validateFullName = (value) => {
    if (value.length < 3) {
      return "Full Name must be at least 3 characters";
    }
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return "";
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let error = "";

    // Validation logic for each field
    switch (name) {
      case "fullname":
        error = validateFullName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      default:
        break;
    }

    setUserRegistration({ ...userRegistration, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      // Add form submission logic here
      console.log("Form is valid, submitting...");
      navigate("/endpage");
    } else {
      console.log("Form has errors, please correct them.");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="signup">
      <div className="signup-header">
        <div className="signup-image">
          <img src={logo} alt="brunel" />
        </div>
        <div className="close-button">
          <CloseButton onClick={handleClose} />
        </div>
      </div>

      <div className="form">
        <h1 className="form-header">Registration Form</h1>
        <h1 className="form-description">Start your success Journey here!</h1>
        <form className="form-body" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              className="form-input"
              type="text"
              placeholder="Enter Your Name"
              value={userRegistration.fullname}
              onChange={handleInput}
              name="fullname"
              id="fullname"
            ></input>

            <input
              className="form-input"
              type="text"
              placeholder="Enter Your Email"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="email"
            />
          </div>
          <div className="error-messages">
            {Object.values(errors).map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>

          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
