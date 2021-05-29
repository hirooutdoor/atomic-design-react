import { Router } from "./router/Router";
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
  return <Router />;
}
