import React from "react";
import Hero from "./components/Hero";
import Information from "./components/Information";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-10 text-3xl">
      <Navbar />
      <Hero />
      <Information />
    </div>
  );
}

export default App;
