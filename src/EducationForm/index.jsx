import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const EducationForm = ({ id, values, onDelete, canDelete, onSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eduInfo, setEduInfo] = useState(values);

  // useEffect is necessary to update values
  // when changes are made outside of the component.
  useEffect(() => {
    setEduInfo(values);
  }, [values]);

  // TODO: make this DRY (used in multiple files)
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { school, degree, startDate, endDate } = eduInfo;

    const currentDate = new Date();
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (startDateObj > currentDate) {
      alert("Start date cannot be in the future.");
      return;
    }

    if (startDateObj > endDateObj) {
      alert("End date cannot be before start date.");
      return;
    }

    if (school && degree && startDate && endDate) {
      setIsSubmitted(true);
      onSubmit(id, eduInfo);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setEduInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  // TODO: change date input to just years? (Not sure how I would format)
  return (
    <>
      {!isSubmitted ? (
        <form action="" onSubmit={handleFormSubmit}>
          {canDelete && (
            <button id="delete" type="button" onClick={onDelete}>
              x
            </button>
          )}
          <label htmlFor="school">Name of University</label>
          <input
            type="text"
            id="school"
            value={eduInfo.school}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={eduInfo.degree}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={eduInfo.startDate}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="endDate">Graduation Date</label>
          <input
            type="date"
            id="endDate"
            value={eduInfo.endDate}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        // .info is used for styling
        <div className="education info">
          {canDelete && (
            <button id="delete" type="button" onClick={onDelete}>
              x
            </button>
          )}
          <h2>{eduInfo.school}</h2>
          <h3>{eduInfo.degree}</h3>
          <p>
            {new Date(eduInfo.startDate).getFullYear()} -{" "}
            {new Date(eduInfo.endDate).getFullYear()}
          </p>
          <button id="edit" onClick={() => setIsSubmitted(false)}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

EducationForm.propTypes = {
  id: PropTypes.number.isRequired,
  values: PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EducationForm;
