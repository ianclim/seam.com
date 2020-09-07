import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import MainFeature1 from "components/features/TwoColWithButton.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Header from "components/headers/Header.js";
import Footer from "components/footers/MiniCenteredFooter.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Seam</Subheading>}
        heading="We're making online shopping fun."
        buttonRounded={true}
        primaryButtonText="Contact Us"
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
