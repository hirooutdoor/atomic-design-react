import { PrimaryButton } from "./compoenents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compoenents/atoms/button/SecondaryButton";
import { SearchInput } from "./compoenents/molecules/SearchInput";
import { UserCard } from "./compoenents/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "Armin",
  image: "https://source.unsplash.com/ux2LvytLQ-A",
  email: "12345@example.com",
  phone: "000-000-000",
  company: {
    name: "Alphabet.LTD"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
