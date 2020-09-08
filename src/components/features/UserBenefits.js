import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import LiveStreamImage from "images/live-stream-icon.svg";
import ShoppingBagImage from "images/shopping-bag-icon.svg";
import ShoppingCartImage from "images/shopping-cart-icon.svg";
import StarImage from "images/star-icon.svg";
import TagImage from "images/tag-icon.svg";
import GroupImage from "images/group-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Features", subheading = "", description = "" }) => {

  const defaultCards = [
    {
      imageSrc: LiveStreamImage,
      title: "Live rooms",
      description: "Join a public room to talk to influencers, designers, and brands or start a private room shop, try on, and share clothes with friends"
    },
    { imageSrc: ShoppingBagImage, 
      title: "Virtual dressing room",
      description: "Try on clothes from the comfort of your home on any device. We project a 3-dimensional model of an article of clothing onto your body so you can see how it looks."
    },
    { imageSrc: ShoppingCartImage, 
      title: "Browse & purchase in app",
      description: "You'll never have to leave our app to find, try on, or purchase an item. All clothes featured in public rooms will be available directly in our app."
    },
    { imageSrc: StarImage, 
      title: "Unreleased outfits",
      description: "Shop exclusive, unreleased outfits before they're unavailable, directly from the manufacturer" 
    },
    { imageSrc: TagImage,
      title: "Lower prices",
      description: "Without any overhead of typical retailers, we're able to offer our clothes at a fraction of retailers' prices."
    },
    { imageSrc: GroupImage, 
      title: "Group buying",
      description: "Receive discounts when you purchase from the same manufacturer with a group of family, friends, or other Seam shoppers."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
