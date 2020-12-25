import React, { useState } from 'react';
import * as Yup from 'yup';

import { Container } from '../components';
import {
  Form,
  FormField,
  FormPasswordField,
  PrivacePolicyCheckbox,
  SubmitButton,
} from '../components/forms';

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email('Invalid Email').label('Email'),
  password: Yup.string().required().min(5).max(50).label('Password'),
  checked: Yup.bool().oneOf([true], 'Privace Policy must be checked!'),
});

const SignUpScreen = ({ navigation }) => {
  const [inputs] = useState({});
  const focusNextField = (nextField) => {
    inputs[nextField].focus();
  };

  return (
    <Container heading="Create your account">
      <Form
        initialValues={{ name: '', email: '', password: '', checked: false }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (values.checked) navigation.navigate('Welcome');
          else return;
        }}
      >
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="username"
          autoCorrect={false}
          blurOnSubmit={false}
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
          blurOnSubmit={false}
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
        <PrivacePolicyCheckbox name="checked" onReadPress={() => true} />
        <SubmitButton label="Get Started" />
      </Form>
    </Container>
  );
};

export default SignUpScreen;
