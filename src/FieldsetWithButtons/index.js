import "./style.css";

const Fieldset = ({ title, body }) => (
  <fieldset className="fieldset fieldset__buttons">
    <h2 className="fieldset__header">{title}</h2>
    {body}
  </fieldset>
);

export default Fieldset;