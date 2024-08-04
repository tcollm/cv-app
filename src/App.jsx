import { useState } from "react";
import GeneralInfoForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import GenerateResume from "./GenerateResume";

function App() {
  const [edForms, setEdForms] = useState([
    {
      id: Date.now(),
      values: { school: "", degree: "", startDate: "", endDate: "" },
      submitted: false,
    },
  ]);
  const [exForms, setExForms] = useState([
    {
      id: Date.now(),
      values: { position: "", company: "", startDate: "", endDate: "" },
      submitted: false,
    },
  ]);

  const [generalData, setGeneralData] = useState(null);
  const [generateClicked, setGenerateClicked] = useState(false);

  const handleAddNewForm = (setForms, forms, initialValues) => {
    const newId = Date.now();
    setForms([
      ...forms,
      { id: newId, values: initialValues, submitted: false },
    ]);
  };

  const handleAddNewEd = () =>
    handleAddNewForm(setEdForms, edForms, {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  const handleAddNewEx = () =>
    handleAddNewForm(setExForms, exForms, {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
    });

  const handleDeleteForm = (setForms, forms, id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this form?"
    );
    if (forms.length > 1 && confirmDelete) {
      setForms(forms.filter((form) => form.id !== id));
    }
  };

  const handleDeleteEd = (id) => handleDeleteForm(setEdForms, edForms, id);
  const handleDeleteEx = (id) => handleDeleteForm(setExForms, exForms, id);

  const handleGenSubmit = (data) => {
    setGeneralData(data);
  };

  const handleFormSubmit = (id, formData, setForms, forms) => {
    const updatedForms = forms.map((form) =>
      form.id === id ? { ...form, values: formData, submitted: true } : form
    );
    setForms(updatedForms);
  };

  const handleGenerateResume = () => {
    // if everything is submitted
    const allEdSubmitted = edForms.every((form) => form.submitted);
    const allExSubmitted = exForms.every((form) => form.submitted);

    if (allEdSubmitted && allExSubmitted) {
      setGenerateClicked(true);
    } else {
      alert("Please submit all forms before generating resume.");
    }
  };

  return (
    <>
      {!generateClicked ? (
        <>
          <section id="header">
            <h1>CV Generator</h1>
            <p>
              Create a CV/resume now with this simple generator! All you need to
              do is enter your info and we&#39;ll do the rest for you!
            </p>
          </section>
          <section id="general">
            <GeneralInfoForm onSubmit={handleGenSubmit} />
          </section>
          <section id="education">
            {edForms.map((form) => (
              <EducationForm
                key={form.id}
                id={form.id}
                values={form.values}
                onDelete={() => handleDeleteEd(form.id)}
                canDelete={edForms.length > 1}
                onSubmit={(formId, formData) =>
                  handleFormSubmit(formId, formData, setEdForms, edForms)
                }
              />
            ))}

            <button id="add-new" onClick={handleAddNewEd}>
              +
            </button>
          </section>
          <section id="experience">
            {exForms.map((form) => (
              <ExperienceForm
                key={form.id}
                id={form.id}
                values={form.values}
                onDelete={() => handleDeleteEx(form.id)}
                canDelete={exForms.length > 1}
                onSubmit={(formId, formData) =>
                  handleFormSubmit(formId, formData, setExForms, exForms)
                }
              />
            ))}
            <button id="add-new" onClick={handleAddNewEx}>
              +
            </button>
          </section>
          <section id="generate">
            <button id="generate-resume" onClick={handleGenerateResume}>
              Generate Resume
            </button>
          </section>
        </>
      ) : (
        <>
          {/* TODO: fix props */}
          {console.log("General Data:", generalData)}
          <GenerateResume
            generalData={generalData}
            educationData={edForms}
            experienceData={exForms}
          />
        </>
      )}
    </>
  );
}

export default App;
