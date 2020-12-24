import { useFormikContext } from 'formik';
import React from 'react';

import Checkbox from '../Checkbox';

const FormCheckbox = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();

  return <Checkbox checked={values[name]} onPress={() => setFieldValue(name, !values[name])} />;
};

export default FormCheckbox;
