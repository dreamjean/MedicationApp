import { useFormikContext } from 'formik';
import React, { useState } from 'react';

import PasswordInput from '../PasswordInput';
import ErrorMessage from './ErrorMessage';

const FormPasswordField = ({ name, onRef, onRefSubmit, ...rest }) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
    handleSubmit,
  } = useFormikContext();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <>
      <PasswordInput
        error={errors[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onPress={() => setSecureTextEntry((prev) => !prev)}
        onSubmitEditing={onRefSubmit ? onRefSubmit : handleSubmit}
        ref={onRef}
        secureTextEntry={secureTextEntry}
        touched={touched[name]}
        value={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormPasswordField;
