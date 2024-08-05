import PropTypes from "prop-types";
import styles from "./styles.module.css";

function GenerateResume({ generalData, experienceData, educationData }) {
  // TODO: add pdf functionality
  return (
    <div className={styles.resumeWrapper}>
      <h1 className={styles.resumeTitle}>{generalData.name}</h1>
      <section
        className={`${styles.section} ${styles["section-general-info"]}`}
      >
        <p>{generalData.phone}</p>
        <p>{generalData.email}</p>
      </section>
      <section className={`${styles.section} ${styles["section-experience"]}`}>
        {experienceData.map((form) => (
          <div key={form.id} className={styles.form}>
            <div className={styles.left}>
              <p>{form.values.position}</p>
              <p>{form.values.company}</p>
            </div>
            <div className={styles.right}>
              <p>
                {form.values.startDate} - {form.values.endDate}
                {form.values.startDate} -{" "}
                {form.values.currentlyWork ? "Current" : form.values.endDate}
              </p>
            </div>
            <p>{form.values.responsibilities}</p>
          </div>
        ))}
      </section>
      <section className={`${styles.section} ${styles["section-education"]}`}>
        {educationData.map((form) => (
          <div key={form.id} className={styles.form}>
            <div className={styles.left}>
              <p>{form.values.degree}</p>
              <p>{form.values.school}</p>
            </div>
            <div className={styles.right}>
              <p>
                {new Date(form.values.startDate).getFullYear()} -{" "}
                {new Date(form.values.endDate).getFullYear()}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// TODO: add values prop around company, pos, etc.
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
