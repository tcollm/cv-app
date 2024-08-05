import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ExperienceForm({ id, values, onDelete, canDelete, onSubmit }) {
  const [currentlyWork, setCurrently] = useState(values.currentlyWork || false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expInfo, setExpInfo] = useState(values);

  // useEffect is necessary to update values
  // when changes are made outside of the component.
  useEffect(() => {
    setExpInfo(values);
  }, [values]);

  const handleCheckboxChange = () => {
    setCurrently(!currentlyWork);
    setExpInfo((prevInfo) => ({
      ...prevInfo,
      currentlyWork: !currentlyWork,
    }));
  };

  // TODO: make this DRY (used in multiple files)
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      company,
      position,
      responsibilities,
      startDate,
      endDate,
      currentlyWork,
    } = expInfo;

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

    if (
      company &&
      position &&
      responsibilities &&
      startDate &&
      (currentlyWork || endDate)
    ) {
      setIsSubmitted(true);
      onSubmit(id, expInfo);
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
          <label htmlFor="position">Position Title</label>
          <input
            type="text"
            id="position"
            value={expInfo.position}
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
                value={currentlyWork ? -1 : expInfo.endDate}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          <label>
            <input
              type="checkbox"
              id="checkbox"
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
          {canDelete && (
            <button id="delete" type="button" onClick={onDelete}>
              x
            </button>
          )}
          <h2>{expInfo.company}</h2>
          <h3>{expInfo.position}</h3>
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
  id: PropTypes.number.isRequired,
  values: PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    responsibilities: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    currentlyWork: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ExperienceForm;
