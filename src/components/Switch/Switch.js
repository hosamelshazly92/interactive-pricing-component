import { container } from "./Switch.module.css";

const Switch = ({ handler }) => {
  return (
    <div className={container}>
      <input onClick={handler} id="switch" type="checkbox" />
      <label htmlFor="switch">toggle</label>
    </div>
  );
};

export default Switch;
