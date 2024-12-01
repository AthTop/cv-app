import "./App.css";
import { GeneralInformation } from "./components/GeneralInfo";
import { Education } from "./components/EduExp";
import { Experience } from "./components/Experience";
import { useState } from "react";

function App() {
  const [experiences, setExperiences] = useState([
    { id: 0, isViewMode: false },
  ]);
  const [isViewMode, setViewMode] = useState(false);

  const addExperience = () => {
    setExperiences([...experiences, { id: experiences.length, isViewMode }]);
  };

  const toggleViewMode = () => {
    setViewMode(!isViewMode);
    setExperiences(
      experiences.map((exp) => ({ ...exp, isViewMode: !isViewMode }))
    );
  };

  return (
    <>
      <button onClick={toggleViewMode} id="toggle-view-mode">
        {!isViewMode ? "View Mode" : "Edit Mode"}
      </button>
      <GeneralInformation isViewMode={isViewMode} />
      <Education isViewMode={isViewMode} />
      <div className="experiences-container">
        {experiences.map((exp) => (
          <Experience key={exp.id} isViewMode={exp.isViewMode} />
        ))}
      </div>
      {!isViewMode && (
          <>
            <button onClick={() => addExperience()}>Add Experience</button>
          </>
        )}
    </>
  );
}

export default App;
