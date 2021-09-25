import {
  container,
  top,
  bottom,
  sectionFirst,
  capital,
  flex,
  highlight,
  sectionSecond,
  left,
  right,
  cta,
  icon,
  label,
} from "./Card.module.css";
import Range from "../Range/Range";
import { useState } from "react";
import tick from "../../images/icon-check.svg";
import Switch from "../Switch/Switch";

const Card = () => {
  const [val, setVal] = useState(16);

  const handleClick = () => {
    alert(`Amount: $${val} / month`);
  };

  return (
    <div className={container}>
      <div className={top}>
        <div className={sectionFirst}>
          <p className={capital}>100K Pageviews</p>
          <div className={flex}>
            <span className={highlight}>${val}.00 &nbsp;</span>
            <span>/ month</span>
          </div>
        </div>

        <Range inputVal={val} inputSetVal={setVal} />

        <div className={sectionSecond}>
          <p>Monthly Billing</p>
          <Switch />
          <p>Yearly Billing</p>
          <span className={label}>25% Discount</span>
        </div>
      </div>

      <hr />

      <div className={bottom}>
        <div className={left}>
          <p>
            <img className={icon} src={tick} alt="tick icon" />
            Unlimited Websites
          </p>
          <p>
            <img className={icon} src={tick} alt="tick icon" />
            100% Data Ownership
          </p>
          <p>
            <img className={icon} src={tick} alt="tick icon" />
            Email Reports
          </p>
        </div>
        <div className={right}>
          <button className={cta} onClick={handleClick}>
            Start My Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
