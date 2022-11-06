import React from 'react';
import styled from 'styled-components';
import UserProfile from "../data/profile"
import { useNavigate } from 'react-router-dom';

const Contact = () => {
const history=useNavigate()
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkbox: false,
  });
  const [error, setError] = React.useState({
      firstName: false,
      lastName: false,
      email: false,
      checkbox: false,
      message: false,
  });

  const submit = (e) => {
    e.preventDefault();
    for (const key in data) {
      if (!data[key]) {
        setError((error) => ({ ...error, [key]: true }));
      } else {
        setError((error) => ({ ...error, [key]: false }));
        history('/')
      }
    }
  }

  return (
    <div>
      <Main>
        <Heading>Contact Me</Heading>
        <Text>
          Hi there, contact me to ask me about anything you have in mind.
        </Text>
        <Form onSubmit={submit}>
          <Div>
            <Width100>
              <Label>First Name</Label>
              <Input id="first_name" 
                  value={data.firstName} type='text' placeholder='Enter your first name'
                  onChange={(e) =>
                    setData((data) => ({ ...data, firstName: e.target.value }))
                  }
                  fullWidth
                  error={error.firstName && !data.firstName}
                  />
            {error?.firstName && !data.firstName && (
                  <Helper>Please enter your first name</Helper>
                )}
            </Width100>
            <Width100>
              <Label>Last Name</Label>
              <Input id="last_name" 
                  value={data.lastName} type='text' placeholder='Enter your last name'  
                  onChange={(e) =>
                    setData((data) => ({ ...data, lastName: e.target.value }))
                  }
                  fullWidth
                  error={error.lastName && !data.lastName}
                  />
                  {error?.lastName && !data.lastName && (
                  <Helper>Please enter your last name</Helper>
                )}
            </Width100>
          </Div>
          <Label>Email</Label>
          <Input id='email' 
                  value={data.email} type='email' 
                  onChange={(e) =>
                    setData((data) => ({ ...data, email: e.target.value }))
                  }
                  fullWidth
                  error={error.email && !data.email} placeholder='yourname@email.com' />
          {error?.email && !data?.email && (
                  <Helper>Please enter your email address</Helper>
                )}
          <Label>Message</Label>
          <Textarea
            id="message"
            type='textarea'
            placeholder="Send me a message and I'll reply you as soon as possible..."            
            value={data.message}
            onChange={(e) =>
              setData((data) => ({ ...data, message: e.target.value }))
            }
            error={error?.message && !data?.message}
          />
          {error?.message && !data?.message && (
            <Helper>Please enter a message</Helper>
          )}
          <DivB>
            <Checkbox type="checkbox"  checked={data.checkbox}
                  onChange={(e) =>
                    setData((data) => ({ ...data, checkbox: !data.checkbox }))
                  } />
            <Text>You agree to providing your data to {UserProfile.slack_name} who may contact you.</Text>
            
          </DivB>
                    {error?.checkbox && !data?.checkbox && <Helper>Please check the box</Helper>}
          <Button id='btn__submit'>Send message</Button>
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
  width: 70%;
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
  font-size: 18px;
  line-height: 18px;
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
  margin-bottom: 20px;
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
  &:hover,:focus {
    outline: 0;
    transition: all 0.1s ease-out;
    border: ${({error}) => error === false ? "1px solid #D1E9FF" : "1px solid #F89687"};
    box-shadow: ${({error}) => error === false ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF"
      : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"}
  }
`;
const Checkbox = styled.input`
  padding: 20px 10px;
  border-radius: 20px;
  font-size: 16px;
  width: 20px;
  height: 20px  
  &:hover, :focus {
    outline: 0;
    box-shadow: ${({error}) => error  === false ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF"
    : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"};
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
   &:hover,:focus {
    outline: 0;
    box-shadow: ${({error}) => error === false ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF"
    : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"};
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
  &:hover {
    background: #1591DA;
    outline: 0;
  }
`
const Helper = styled.p`
color: rgba(248, 63, 35, 1);
font-size: 14px;
margin-top: -15px;
margin-bottom: 20px;
`