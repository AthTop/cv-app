import { useState } from "react";
import { Input } from "./input";
import "../styles/section.css";

const personEducation = {
  school: "",
  title: "",
  startDate: "",
};

function Education({ isViewMode }) {
  const [education, setEducation] = useState(personEducation);
  const [isSubmited, setSubmited] = useState(false);

  if (isViewMode || isSubmited) {
    return (
        <section>
          <h2>Education</h2>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Start date: {education.startDate}</p>
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
      <section>
        <h2>Education</h2>
        <Input
          label="School"
          value={education.school}
          onChange={(e) =>
            setEducation({ ...education, school: e.target.value })
          }
        />
        <Input
          label="Title"
          value={education.title}
          onChange={(e) =>
            setEducation({ ...education, title: e.target.value })
          }
        />
        <Input
          label="Start Date"
          value={education.startDate}
          onChange={(e) =>
            setEducation({ ...education, startDate: e.target.value })
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

export { Education };
