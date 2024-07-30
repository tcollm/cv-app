import PropTypes from "prop-types";

const EducationForm = ({ onDelete, canDelete }) => {
  return (
    <div id="edu-info">
      <form action="">
        {canDelete && (
          <button id="delete" type="button" onClick={onDelete}>
            x
          </button>
        )}
        <label htmlFor="school">Name of University</label>
        <input type="text" id="school" required />
        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" required />
        <label htmlFor="date">Graduation Date</label>
        <input type="text" id="date" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

EducationForm.propTypes = {
  // id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
};

export default EducationForm;
