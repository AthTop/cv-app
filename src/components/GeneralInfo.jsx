import { useState } from "react";
import { Input } from "./input";
import "../styles/section.css";

const personTemplate = {
  name: "",
  email: "",
  phone: "",
};

function GeneralInformation({ isViewMode }) {
  const [person, setPerson] = useState(personTemplate);
  const [isSubmited, setSubmited] = useState(false);
  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };
  const changeEmail = (e) => {
    setPerson({ ...person, email: e.target.value });
  };
  const changePhone = (e) => {
    setPerson({ ...person, phone: e.target.value });
  };

  if (isViewMode || isSubmited) {
    return (
      <section>
        <h2>General Information</h2>
        <p>Name: {person.name}</p>
        <p>Email: {person.email}</p>
        <p>Phone: {person.phone}</p>
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
        <h2>General Information</h2>
        <Input label="Name" value={person.name} onChange={changeName} />
        <Input
          label="Email"
          value={person.email}
          onChange={changeEmail}
          type="email"
        />
        <Input
          label="Phone"
          value={person.phone}
          onChange={changePhone}
          type="tel"
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

export { GeneralInformation };
