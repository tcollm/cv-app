import { useState } from "react";
import PropTypes from "prop-types";

function ExperienceForm({ onDelete, canDelete }) {
  const [currentlyWork, setCurrently] = useState(false);

  function handleCheckboxChange() {
    setCurrently(!currentlyWork);
  }

  return (
    <div id="ex-info">
      <form action="">
        {canDelete && (
          <button id="delete" type="button" onClick={onDelete}>
            x
          </button>
        )}
        <label htmlFor="company">Name of Company</label>
        <input type="text" id="company" required />
        <label htmlFor="title">Position Title</label>
        <input type="text" id="title" required />
        <label htmlFor="responsibilities">Main Responsibilities</label>
        <input type="text" id="responsibilities" required />
        <label htmlFor="start">Start Date</label>
        <input type="text" id="start" required />

        {!currentlyWork && (
          <>
            <label htmlFor="end">End Date</label>
            <input type="text" id="end" required />
          </>
        )}

        <label>
          <input
            type="checkbox"
            id="current"
            checked={currentlyWork}
            onChange={handleCheckboxChange}
          />
          Currently work here
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ExperienceForm.propTypes = {
  // id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
};

export default ExperienceForm;
