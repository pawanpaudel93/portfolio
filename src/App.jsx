import { useEffect } from "react";
import { loadAllEventListeners } from "@/utils";
import { About, Header, Resume, Portfolio, Contact } from "@/sections";

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
    </div>
  );
}

export default App;
