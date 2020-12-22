import React from 'react';
// import styled from 'styled-components';
import * as Yup from 'yup';

import { Container } from '../components';
import { Form, FormField, SubmitButton } from '../components/forms';

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Invalid Email').label('Email'),
  password: Yup.string().required().min(5).max(50).label('Password'),
});

const SignInScreen = () => {
  return (
    <Container heading="Welcome back!">
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          icon="email"
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          numberOfLines={1}
          placeholder="Enter email"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="emailAddress"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          icon="lock"
          keyboardAppearance="default"
          keyboardType="default"
          maxLength={50}
          name="password"
          numberOfLines={1}
          placeholder="Enter password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton label="Log In" />
      </Form>
    </Container>
  );
};

export default SignInScreen;
