import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/Header.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/ManufacturerForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ManufacturerBenefits.js";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <MainFeature1
        heading="Why partner with Seam?"
        subheading="Manufacturer partnerships"
        description="Our goal is to establish a beneficial relationship between Seam and clothing wholesale manufacturers by not only sourcing Seam’s clothing inventory from manufacturers but to also create engaging and interactive content for shoppers on our platform."
        buttonRounded={true}
        primaryButtonText="Contact Us"
      />
      <Features />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
