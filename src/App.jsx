import { About, Home, Resume, Portfolio, Contact, NavBar } from "@/sections";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/resume" Component={Resume} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </HashRouter>
  );
}

export default App;
