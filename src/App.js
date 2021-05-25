import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Pricing, About, Contact } from "./pages";
import { Navbar, CTA, Footer } from "./components";

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <CTA />
      <Footer />
    </div>
  </Router>
);

export default App;
