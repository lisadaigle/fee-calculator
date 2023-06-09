import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainPage } from "./MainPage";
import { FormIndex } from "./FormIndex";

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
      <FormIndex />
    </div>
  );
}

export default App;
