import PropTypes from "prop-types";

function GenerateResume({ generalData, experienceData, educationData }) {
  // TODO: add pdf functionality
  console.log("GEN DATA:");
  console.log(`TYPEOF: ${typeof generalData}`);
  console.log(generalData);
  return (
    <>
      <h1>{generalData.name}</h1>
      <section id="general-info">
        <p>{generalData.phone}</p>
        <p>{generalData.email}</p>
      </section>
      <section id="experience">
        {/* {experienceData.map((form) => (
          <div key={form.id} id={form.id}>
            <div id="left">
              <p>form.position</p>
              <p>form.company</p>
            </div>
            <div id="right">
              <p>
                {form.startDate} - {form.endDate}
              </p>
            </div>
            <p>form.responsibilities</p>
          </div>
        ))} */}
      </section>
      <section id="education">
        {/* {educationData.map((form) => (
          <div key={form.id} id={form.id}>
            <div id="left">
              <p>{form.degree}</p>
              <p>{form.school}</p>
            </div>
            <div id="right">
              <p>
                {new Date(form.startDate).getFullYear()} -{" "}
                {new Date(form.endDate).getFullYear()}
              </p>
            </div>
          </div>
        ))} */}
      </section>
    </>
  );
}

GenerateResume.propTypes = {
  generalData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      responsibilities: PropTypes.string,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  educationData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GenerateResume;
