import { useState } from "react";
import GeneralInfoForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function App() {
  const [edForms, setEdForms] = useState([
    { id: Date.now(), component: <EducationForm key={Date.now()} /> },
  ]);

  const [exForms, setExForms] = useState([
    { id: Date.now(), component: <ExperienceForm key={Date.now()} /> },
  ]);

  const handleAddNewForm = (setForms, forms, FormComponent) => {
    const newId = Date.now();
    setForms([...forms, { id: newId, component: FormComponent }]);
  };

  const handleDeleteForm = (setForms, forms, id) => {
    if (forms.length > 1) {
      setForms(forms.filter((form) => form.id !== id));
    }
  };

  const handleAddNewEd = () =>
    handleAddNewForm(setEdForms, edForms, <EducationForm key={Date.now()} />);

  const handleAddNewEx = () =>
    handleAddNewForm(setExForms, exForms, <ExperienceForm key={Date.now()} />);

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
        {/* <h2>Education</h2> */}
        {/* map to only include the component (not the id) */}
        {edForms.map(
          (form) =>
            // TODO: make this a creation of a form object
            // (and make it null in handleAddNewEx)
            // TODO: map onDelete function to form object
            form.component
        )}
        <button id="add-new" onClick={handleAddNewEd}>
          +
        </button>
      </section>
      <section id="experience">
        {/* <h2>Experience</h2> */}
        {exForms.map((form) => form.component)}
        <button id="add-new" onClick={handleAddNewEx}>
          +
        </button>
      </section>
    </>
  );
}

export default App;
