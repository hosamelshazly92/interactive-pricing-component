import { container } from "./Range.module.css";

const Range = ({ inputVal, inputSetVal }) => {
  const handleChange = (evt) => {
    inputSetVal(evt.target.value);
  };

  return (
    <input
      className={container}
      type="range"
      min="8"
      max="88"
      step="8"
      value={inputVal}
      onChange={handleChange}
    />
  );
};

export default Range;
