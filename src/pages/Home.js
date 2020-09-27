import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Hero from "components/hero/homeBodyHeader.js";
import Features from "components/features/ManufacturerBenefits.js";
import ContactUsForm from "components/forms/ManufacturerForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Features />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
