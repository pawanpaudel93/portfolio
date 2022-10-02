import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import { loadAllEventListeners } from "./utils";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Credit from "./components/Credit";

function App() {
  useEffect(() => {
    loadAllEventListeners();
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Credit />
    </div>
  );
}

export default App;
