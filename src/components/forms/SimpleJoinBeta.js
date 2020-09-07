import React, { useState } from "react";
import tw from "twin.macro";
import { ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import { Container as ContainerBase } from "components/misc/Layouts.js"
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";
import { useAlert } from 'react-alert'
import firebase from '../../Firebase.js'

const Container = tw(ContainerBase)`-mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-primary-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-primary-500 sm:text-left leading-none`
const Description = tw.p`text-black font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-white`


export default () => {
  const [email, setEmail] = useState("Your Email Address");
  const alert = useAlert();

  function joinWaitlist() {
    if (email === "" || email === "Your Email Address") {
      alert.show('Please enter a valid email address');
      return
    }

    const db = firebase.firestore();
    const form = {
      email: email
    }

    db.collection("shoppers").add({ form }).then((docref) => {
      alert.show("You're on the waitlist! Thanks for supporting us - we'll let you know when we launch.")
    })
      .catch((error) => {
        console.error('error', error)
      })
  }


  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Join waitlist</Heading>
              <Description>Sign up now to get your invite when we launch our beta.</Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>
            <Form>
              <Input name="waitlist" type="email" placeholder={email} onChange={event => setEmail(event.target.value)}/>
              <button type="submit" onClick={joinWaitlist} style={{ marginTop: 25, width: 135, height: 55, backgroundColor: '#7b00ff', color: 'white', fontWeight: 'bold'}}>Join waitlist</button>
            </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
  );
};
