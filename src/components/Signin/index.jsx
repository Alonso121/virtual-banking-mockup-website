import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormContent,
  FormButton,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Leku</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign In to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput id="email" type="email" required />
            <FormLabel htmlFor="password">Email</FormLabel>
            <FormInput id="password" type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
