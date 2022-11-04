import React from 'react';
import styled from 'styled-components';
import UserProfile from "../data/profile"

const Contact = () => {
  return (
    <div>
      <Main>
        <Heading>Contact Me</Heading>
        <Text>
          Hi there, contact me to ask me about anything you have in mind.
        </Text>
        <Form>
          <Div>
            <Width100>
              <Label>First Name</Label>
              <Input type='text' placeholder='Enter your first name' required />
            </Width100>
            <Width100>
              <Label>Last Name</Label>
              <Input type='text' placeholder='Enter your last name' required />
            </Width100>
          </Div>
          <Label>Last Name</Label>
          <Input type='email' placeholder='yourname@email.com' required />
          <Label>Message</Label>
          <Textarea
            type='textarea'
            placeholder='Send me a message and Ill reply you as soon as possible...'
            required
          />
          <DivB>
            <Checkbox type="checkbox" required />
            <Text>You agree to providing your data to {UserProfile.slack_name} who may contact you.</Text>
          </DivB>
          <Button>Send message</Button>
        </Form>
      </Main>
    </div>
  );
};

export default Contact;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 80px 0 64px;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Heading = styled.h2`
  font-weight: 600;
  font-size: 36px;
`;
const Text = styled.p`
  color: #475467;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
`;
const DivB = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Form = styled.form`
  padding: 30px 0;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #344054;
`;
const Width100 = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 20px;
`;
const Checkbox = styled.input`
  padding: 20px 10px;
  border-radius: 20px;
  font-size: 16px;
  width: 20px;
  height: 20px
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 20px 10px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 20px;
  resize: none;
  height: 132px;
  color: #667085;
`;
const Button = styled.button`
background: #1570EF;
border: 1px solid #1570EF;
width: 100%;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
padding: 16px 0;
color: white;
font-size: 16px;
margin-top: 30px;
`