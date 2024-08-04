import { useState } from "react";
import PropTypes from "prop-types";

function GeneralInfoForm({ onSubmit }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { name, email, phone } = generalInfo;
    onSubmit(generalInfo);

    if (name && email && phone) {
      setIsSubmitted(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setGeneralInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  const handleEditClick = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <h2>General Info</h2>
      {!isSubmitted ? (
        <form action="" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={generalInfo.name}
            onChange={handleInputChange}
            required
            // TODO: add autofill attribute
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={generalInfo.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            value={generalInfo.phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        // .info is used for styling
        <div className="general info">
          <p>
            <strong>Name:</strong> {generalInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {generalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {generalInfo.phone}
          </p>
          <button id="edit" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </>
  );
}

GeneralInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default GeneralInfoForm;
