import { useState } from "react";
import { Input } from "./input";
import "../styles/section.css";

const personExperience = {
  company: "",
  position: "",
  responsibilities: "",
  startDate: "",
  endDate: "",
};

function Experience({ isViewMode }) {
  const [experience, setExperience] = useState(personExperience);
  const [isSubmited, setSubmited] = useState(false);

  if (isViewMode || isSubmited) {
    return (
      <section className="experience">
        <h2>Experience</h2>
        <p>Company: {experience.company}</p>
        <p>Position: {experience.position}</p>
        <p>Responsibilities: {experience.responsibilities}</p>
        <p>Start Date: {experience.startDate}</p>
        <p>End Date: {experience.endDate}</p>
        {!isViewMode && (
          <>
            <button onClick={() => setSubmited(false)}>Edit</button>
          </>
        )}
      </section>
    );
  }

  if (!isSubmited) {
    return (
      <section className="experience">
        <h2>Experience</h2>
        <Input
          label="Company"
          value={experience.company}
          onChange={(e) =>
            setExperience({ ...experience, company: e.target.value })
          }
        />
        <Input
          label="Position"
          value={experience.position}
          onChange={(e) =>
            setExperience({ ...experience, position: e.target.value })
          }
        />
        <Input
          label="Responsibilities"
          value={experience.responsibilities}
          onChange={(e) =>
            setExperience({
              ...experience,
              responsibilities: e.target.value,
            })
          }
          type="textarea"
        />
        <Input
          label="Start Date"
          value={experience.startDate}
          onChange={(e) =>
            setExperience({ ...experience, startDate: e.target.value })
          }
          type="date"
        />
        <Input
          label="End Date"
          value={experience.endDate}
          onChange={(e) =>
            setExperience({ ...experience, endDate: e.target.value })
          }
          type="date"
        />
        {!isViewMode && (
          <>
            <button onClick={() => setSubmited(true)}>Submit</button>
          </>
        )}
      </section>
    );
  }
}

export { Experience };
