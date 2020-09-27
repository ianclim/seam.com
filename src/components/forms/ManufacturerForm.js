import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import firebase from '../../Firebase.js'
import { useAlert } from 'react-alert'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-5`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contact Us",
  heading = <>Looking to learn more?<br></br><span tw="text-primary-500">Get in touch!</span><wbr /></>,
  description = "If you're looking to integrate our virtual dressing room into your website or app, we'd love to hear from you!",
  submitButtonText = "Submit",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const [email, setEmail] = useState("Your Email Address");
  const [name, setName] = useState("Full Name");
  const [company, setCompany] = useState("Company Name");
  const [website, setWebsite] = useState("Company website");
  const [message, setMessage] = useState("Why you're interested:");
  const alert = useAlert();

  function handleSubmit() {
    // Website and message can be optional 
    if (email === "" || email === "Your Email Address") {
      alert.show('Please enter a valid email address');
      return
    } else if (name === "" || name === "Full Name") {
      alert.show('Please enter your name');
      return
    } else if (company === "" || company === "Company Name") {
      alert.show("Please enter your company's name");
      return 
    }

    const db = firebase.firestore();

    const form = {
      name: name,
      email: email,
      company: company,
      website: website,
      message: message
    }

    db.collection("manufacturers").add({ form }).then((docref) => {
      alert.show("Thanks for your interest in partering! We'll reach out to you shortly. Please email us with any questions in the meantime.")
    })
      .catch((error) => {
        console.error('error', error)
      })

  }

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 100, marginTop: 25 }}>
              <Input type="email" name="email" placeholder={email} onChange={event => setEmail(event.target.value)} />
              <Input type="text" name="name" placeholder={name} onChange={event => setName(event.target.value)} />
              <Input type="text" name="company" placeholder={company} onChange={event => setCompany(event.target.value)} />
              <Input type="text" name="website" placeholder={website} onChange={event => setWebsite(event.target.value)} />
              <Textarea name="message" placeholder={message} onChange={event => setMessage(event.target.value)} />
              <button type="submit" onClick={handleSubmit} style={{ marginTop: 25, width: 200, height: 50, backgroundColor: '#7b00ff', color: 'white', borderRadius: 50 }}>
                {submitButtonText}
              </button>
            </div>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
