import { useEffect } from "react";
import { loadAllEventListeners } from "@/utils";
import {
  About,
  Header,
  Resume,
  Portfolio,
  Contact,
  Credit,
} from "@/components";

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
