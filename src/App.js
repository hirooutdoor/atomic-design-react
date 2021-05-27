import { PrimaryButton } from "./compoenents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compoenents/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
    </div>
  );
}
