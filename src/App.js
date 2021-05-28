import { PrimaryButton } from "./compoenents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compoenents/atoms/button/SecondaryButton";
import { SearchInput } from "./compoenents/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
      <SearchInput />
    </div>
  );
}
