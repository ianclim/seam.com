import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import ContactUsForm from "components/forms/JoinBetaAppDemo.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Header from "components/headers/Header.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
