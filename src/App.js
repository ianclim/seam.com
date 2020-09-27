import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import "firebase/firestore";
import Footer from "components/footers/MiniCenteredFooter.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/Header.js";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Partnerships from "pages/Partnerships";
import FAQ from "components/faqs/Faq.js";
import ContactUs from "pages/ContactUs.js";
import SignUp from "pages/SignUp";

export default function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

/*
    <Router>
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/partnerships">
          <Partnerships />
        </Route>
        <Route path="/faq">
          <AnimationRevealPage disabled>
            <Header />
            <FAQ />
            <Footer />
          </AnimationRevealPage>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
*/