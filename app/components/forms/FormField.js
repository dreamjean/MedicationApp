import { useFormikContext } from 'formik';
import React from 'react';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

const FormField = ({ name, onRef, onRefSubmit, ...rest }) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
    handleSubmit,
  } = useFormikContext();

  return (
    <>
      <TextInput
        error={errors[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onSubmitEditing={onRefSubmit ? onRefSubmit : handleSubmit}
        touched={touched[name]}
        value={values[name]}
        ref={onRef}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
