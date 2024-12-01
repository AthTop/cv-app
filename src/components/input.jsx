import "../styles/input.css";

function Input({ label, value, onChange, type="text" }) {
  if (type === "textarea") {
    return (
      <label>
        {label} :
        <textarea 
        value = {value}
        onChange={onChange}
        />
      </label>
    );
  }
    return (
      <label>
        {label} :
        <input 
        type = {type}
        value = {value}
        onChange={onChange}
        />
      </label>
    );
  }

  export {Input};