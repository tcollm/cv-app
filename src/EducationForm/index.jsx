function EducationForm() {
  return (
    <div id="edu-info">
      <form action="">
        <legend>Educational Experience</legend>
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
}

export default EducationForm;
