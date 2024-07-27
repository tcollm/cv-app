import { useState } from "react";
import GeneralInfoForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function App() {
  const [edForms, setEdForms] = useState([
    { id: Date.now(), component: <EducationForm key={Date.now()} /> },
  ]);

  function handleAddNewEd() {
    const newId = Date.now();
    setEdForms([
      ...edForms,
      { id: newId, component: <EducationForm key={newId} /> },
    ]);
  }

  const [exForms, setExForms] = useState([
    { id: Date.now(), component: <ExperienceForm key={Date.now()} /> },
  ]);

  function handleAddNewEx() {
    const newId = Date.now();
    setExForms([
      ...exForms,
      { id: newId, component: <ExperienceForm key={newId} /> },
    ]);
  }

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
        {edForms.map((form) => form.component)}
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
