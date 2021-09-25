import { container, section, heading, paragraph } from "./App.module.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className={container}>
      <div className={section}>
        <h1 className={heading}>Simple, traffic-based pricing</h1>
        <p className={paragraph}>
          Sign-up for 30 day trial, no credit required
        </p>
      </div>

      <Card />
    </div>
  );
}

export default App;
