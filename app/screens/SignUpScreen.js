import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button, Container } from '../components';
import {
  Form,
  FormCheckbox,
  FormField,
  FormPasswordField,
  SubmitButton,
} from '../components/forms';
import Text from '../components/styles/Text';
import { colors } from '../constants';

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email('Invalid Email').label('Email'),
  password: Yup.string().required().min(5).max(50).label('Password'),
  checked: Yup.boolean(),
});

const SignUpScreen = () => {
  const [inputs] = useState({});
  const focusNextField = (id) => {
    inputs[id].focus();
  };

  return (
    <Container heading="Create your account">
      <Form
        initialValues={{ name: '', email: '', password: '', checked: false }}
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
          autoCompleteType="username"
          autoCorrect={false}
          icon="account-circle"
          keyboardAppearance="default"
          keyboardType="default"
          name="name"
          numberOfLines={1}
          onRefSubmit={() => focusNextField('email')}
          placeholder="Username"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="username"
        />
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
          onRef={(input) => (inputs['email'] = input)}
          onRefSubmit={() => focusNextField('password')}
          placeholder="Email address"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="emailAddress"
        />
        <FormPasswordField
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
          onRef={(input) => (inputs['password'] = input)}
          placeholder="Password"
          returnKeyLabel="go"
          returnKeyType="go"
          textContentType="password"
        />
        <Wrapper>
          <TextBox>
            <Text body1>I have read the </Text>
            <Button
              label="Privace Policy"
              textStyle={{ textTransform: 'capitalize', color: colors.mediumBlue, fontSize: 16 }}
              onPress={() => true}
              padding={0}
            />
          </TextBox>
          <FormCheckbox name="checked" />
        </Wrapper>
        <SubmitButton label="Get Started" />
      </Form>
    </Container>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    paddingVertical: space.m1,
  })}
`;

const TextBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default SignUpScreen;
