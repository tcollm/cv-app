import { useState } from "react";
import GeneralInfoForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function App() {
  const [edForms, setEdForms] = useState([{ id: Date.now(), component: null }]);

  const [exForms, setExForms] = useState([{ id: Date.now(), component: null }]);

  const handleAddNewForm = (setForms, forms) => {
    const newId = Date.now();
    setForms([...forms, { id: newId, component: null }]);
  };

  const handleAddNewEd = () => handleAddNewForm(setEdForms, edForms);
  const handleAddNewEx = () => handleAddNewForm(setExForms, exForms);

  const handleDeleteForm = (setForms, forms, id) => {
    if (forms.length > 1) {
      setForms(forms.filter((form) => form.id !== id));
    }
  };

  const handleDeleteEd = (id) => handleDeleteForm(setEdForms, edForms, id);
  const handleDeleteEx = (id) => handleDeleteForm(setExForms, exForms, id);

  return (
    <>
      <section id="header">
        <h1>CV Generator</h1>
        <p>
          Create a CV/resume now with this simple generator! All you need to do
          is enter your info and we&#39;ll do the rest for you!
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
          />
        ))}
        <button id="add-new" onClick={handleAddNewEx}>
          +
        </button>
      </section>
    </>
  );
}

export default App;
