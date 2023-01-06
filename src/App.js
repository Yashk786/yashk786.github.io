import React from "react";

import { About, Footer, Header, Service, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Service />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
