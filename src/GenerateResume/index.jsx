import PropTypes from "prop-types";

function GenerateResume(generalInfo, exForms, edForms) {
  // TODO: add pdf functionality
  return (
    <>
      <h1>generalInfo.name</h1>
      <section id="general-info">
        <p>{generalInfo.phone}</p>
        <p>{generalInfo.email}</p>
      </section>
      <section id="experience">
        {exForms.map((form) => (
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
        ))}
      </section>
      <section id="education">
        {edForms.map((form) => (
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
        ))}
      </section>
    </>
  );
}

GenerateResume.propTypes = {
  generalInfo: PropTypes.object.isRequired,
  exForms: PropTypes.arrayOf(PropTypes.object).isRequired,
  edForms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenerateResume;
