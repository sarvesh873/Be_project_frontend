import React, { useState } from "react";
import styled from "styled-components";

const StepForm = ({ currentStep, handleNext, handlePrev }) => {
  const [depMem, setDepMem] = useState(0);
  const [depDetails, setDepDetails] = useState([]);
  const [child, setChild] = useState(0);
  const [childDetails, setChildDetails] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handleDepMemChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setDepMem(parsedValue);
      setDepDetails(Array(parsedValue).fill({}));
    } else {
      <p>Enter Valid number</p>;
    }
  };

  const handleChildChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setChild(parsedValue);
      setChildDetails(Array(parsedValue).fill({}));
    } else {
      <p>Enter Valid number</p>;
    }
  };

  const handleDepDetailsChange = (index, e) => {
    const { name, value } = e.target;
    setDepDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
  };

  const handleChildDetailsChange = (index, e) => {
    const { name, value } = e.target;
    setChildDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
  };

  return (
    <StyledStepForm>
      <div className="step-form">
        <form onSubmit={handleFormSubmit}>
          {currentStep === 0 && (
            <>
              {/* Step 1 fields */}
              <h2>Personal Details</h2>
              <br />
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" required>
                  <option value="select">Select your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              {/* Step 2 fields */}
              <h2>Income Details</h2>
              <br />
              <div className="form-group">
                <label htmlFor="location">Employment Location: </label>
                <input type="text" id="location" name="location" required />
              </div>
              <div className="form-group">
                <label htmlFor="profession">Your Profession: </label>
                <input type="text" id="profession" name="profession" required />
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary (in LPA): </label>
                <input
                  type="number"
                  step="0.01"
                  id="salary"
                  name="salary"
                  required
                />
              </div>
              <div className="form-group">
<label htmlFor=""></label>
</div>
</>
)}
      {currentStep === 2 && (
        <>
          {/* Step 3 fields */}
          <h2>Dependency Details: </h2>
          <br />
          <div className="form-group">
            <label htmlFor="noOfDependentMembers">
              Number of Dependent Members:{" "}
            </label>
            <input
              type="number"
              id="noOfDependentMembers"
              name="noOfDependentMembers"
              value={depMem}
              onChange={handleDepMemChange}
              required
            />
          </div>
          {depMem > 0 && (
            <div className="form-group">
              <label htmlFor="noOfChild">Number of Children: </label>
              <input
                type="number"
                id="noOfChild"
                name="noOfChild"
                value={child}
                onChange={handleChildChange}
                required
              />
            </div>
          )}
        </>
      )}

      {currentStep === 3 && depMem > 0 && (
        <>
          {/* Step 4 fields for dependent members */}
          {depDetails.map((_, index) => (
            <div key={index}>
              <h3>Dependent Member {index + 1} </h3>
              <div className="form-group">
                <label htmlFor={`dependentName${index}`}>Name:</label>
                <input
                  type="text"
                  id={`dependentName${index}`}
                  name={`dependentName${index}`}
                  onChange={(e) => handleDepDetailsChange(index, e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`dependentAge${index}`}>Age:</label>
                <input
                  type="number"
                  id={`dependentAge${index}`}
                  name={`dependentAge${index}`}
                  onChange={(e) => handleDepDetailsChange(index, e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`dependentGender${index}`}>Gender:</label>
                <select
                  id={`dependentGender${index}`}
                  name={`dependentGender${index}`}
                  onChange={(e) => handleDepDetailsChange(index, e)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          ))}
        </>
      )}

      {currentStep === 4 && child > 0 && (
        <>
          {/* Step 4 fields for children */}
          {childDetails.map((_, index) => (
            <div key={index}>
              <h3>Child {index + 1} </h3>
              <div className="form-group">
                <label htmlFor={`childName${index}`}>Name:</label>
                <input
                  type="text"
                  id={`childName${index}`}
                  name={`childName${index}`}
                  onChange={(e) => handleChildDetailsChange(index, e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`childAge${index}`}>Age:</label>
                <input
                  type="number"
                  id={`childAge${index}`}
                  name={`childAge${index}`}
                  onChange={(e) => handleChildDetailsChange(index, e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`childGender${index}`}>Gender:</label>
                <select
                  id={`childGender${index}`}
                  name={`childGender${index}`}
                  onChange={(e) => handleChildDetailsChange(index, e)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          ))}
        </>
      )}

      {currentStep === 5 && (
        <>
          {/* Step 5 fields */}
          <h2>Expenditure Details</h2>
          <br />
        </>
      )}

      <div className="form-buttons">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  </div>
</StyledStepForm>
);
};

const StyledStepForm = styled.div // Styles...;

export default StepForm;