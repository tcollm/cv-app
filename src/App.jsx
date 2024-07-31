import { useState } from "react";
import GeneralInfoForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import GenerateResume from "./GenerateResume";

function App() {
  const [edForms, setEdForms] = useState([
    { id: Date.now(), component: null, submitted: false },
  ]);
  const [exForms, setExForms] = useState([
    { id: Date.now(), component: null, submitted: false },
  ]);

  const [generateClicked, setGenerateClicked] = useState(false);

  const handleAddNewForm = (setForms, forms) => {
    const newId = Date.now();
    setForms([...forms, { id: newId, component: null }]);
  };

  const handleAddNewEd = () => handleAddNewForm(setEdForms, edForms);
  const handleAddNewEx = () => handleAddNewForm(setExForms, exForms);

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

  const handleFormSubmit = (id, formData, setForms, forms) => {
    const updatedForms = forms.map((form) =>
      form.id === id ? { ...form, component: formData, submitted: true } : form
    );
    setForms(updatedForms);
  };

  const handleGenerateResume = () => {
    // if everything submitted
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
            <GeneralInfoForm />
          </section>
          <section id="education">
            {edForms.map((form) => (
              <EducationForm
                key={form.id}
                id={form.id}
                // values = {form.values}
                onDelete={() => handleDeleteEd(form.id)}
                canDelete={edForms.length > 1}
                onSubmit={(formData) =>
                  handleFormSubmit(form.id, formData, setEdForms, edForms)
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
                // values
                onDelete={() => handleDeleteEx(form.id)}
                canDelete={exForms.length > 1}
                onSubmit={(formData) =>
                  handleFormSubmit(form.id, formData, setExForms, exForms)
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
        // TODO: fix props
        GenerateResume(GeneralInfoForm, exForms, edForms)
      )}
    </>
  );
}

export default App;
