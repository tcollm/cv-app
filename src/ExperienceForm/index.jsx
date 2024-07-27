import { useState } from "react";

function ExperienceForm() {
  const [currentlyWork, setCurrently] = useState(false);

  function handleCheckboxChange() {
    setCurrently(!currentlyWork);
  }

  return (
    <div id="ex-info">
      <form action="">
        <legend>Practical Experience</legend>
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

export default ExperienceForm;
