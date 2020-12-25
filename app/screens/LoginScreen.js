import React, { useState } from 'react';
import * as Yup from 'yup';

import { Button, Container } from '../components';
import { Form, FormField, FormPasswordField, SubmitButton } from '../components/forms';
import Text from '../components/styles/Text';
import View from '../components/styles/View';
import { colors } from '../constants';

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Invalid Email').label('Email'),
  password: Yup.string().required().min(5).max(50).label('Password'),
});

const LoginScreen = ({ navigation }) => {
  const [inputs] = useState({});
  const focusNextField = (nextField) => {
    inputs[nextField].focus();
  };

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
          blurOnSubmit={false}
          icon="email"
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          numberOfLines={1}
          onRefSubmit={() => focusNextField('password')}
          placeholder="Email address"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="emailAddress"
        />
        <FormPasswordField
          refName="password"
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
          placeholder="Enter password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton label="Log In" />
      </Form>
      <Button
        label="Forgot Password?"
        textStyle={{ textTransform: 'capitalize', color: colors.dark }}
        onPress={() => true}
      />
      <View linking style={{ marginTop: 40 }}>
        <Text button left>
          Alreay have an account?{' '}
        </Text>
        <Button
          label="Sign Up"
          bgColor="transparent"
          padding={0}
          textStyle={{ color: colors.primary }}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Container>
  );
};

export default LoginScreen;
