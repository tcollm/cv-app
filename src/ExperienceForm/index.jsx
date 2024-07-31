import { useState } from "react";
import PropTypes from "prop-types";

function ExperienceForm({ onDelete, canDelete }) {
  const [currentlyWork, setCurrently] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expInfo, setExpInfo] = useState({
    company: "",
    posTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const handleCheckboxChange = () => {
    setCurrently(!currentlyWork);
  };

  // TODO: make this DRY (used in multiple files)
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { company, posTitle, responsibilities, startDate, endDate } = expInfo;

    const currentDate = new Date();
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (startDateObj > currentDate) {
      alert("Start date cannot be in the future.");
      return;
    }

    if (!currentlyWork && endDateObj > currentDate) {
      alert("End date cannot be in the future.");
      return;
    }

    if (startDateObj > endDateObj) {
      alert("End date cannot be before start date.");
      return;
    }

    if (company && posTitle && responsibilities && startDate && endDate) {
      setIsSubmitted(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setExpInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  const handleEditClick = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <form action="" onSubmit={handleFormSubmit}>
          {canDelete && (
            <button id="delete" type="button" onClick={onDelete}>
              x
            </button>
          )}
          <label htmlFor="company">Name of Company</label>
          <input
            type="text"
            id="company"
            value={expInfo.company}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="posTitle">Position Title</label>
          <input
            type="text"
            id="posTitle"
            value={expInfo.posTitle}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="responsibilities">Main Responsibilities</label>
          <textarea
            type="text"
            id="responsibilities"
            value={expInfo.responsibilities}
            onChange={handleInputChange}
            rows="5"
            required
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={expInfo.startDate}
            onChange={handleInputChange}
            required
          />

          {!currentlyWork && (
            <>
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                value={expInfo.endDate}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          <label>
            <input
              type="checkbox"
              // id="current"
              checked={currentlyWork}
              onChange={handleCheckboxChange}
            />
            Currently work here
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        // .info is used for styling
        <div className="experience info">
          <h2>{expInfo.company}</h2>
          <h3>{expInfo.posTitle}</h3>
          <p>{expInfo.responsibilities}</p>
          <p>
            {expInfo.startDate} - {currentlyWork ? "Current" : expInfo.endDate}
          </p>
          <button id="edit" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </>
  );
}

ExperienceForm.propTypes = {
  // id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
};

export default ExperienceForm;
