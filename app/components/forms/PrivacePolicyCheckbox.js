import { useFormikContext } from 'formik';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../constants';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Text from '../styles/Text';
import ErrorMessage from './ErrorMessage';

const PrivacePolicyCheckbox = ({ name, onReadPress }) => {
  const { setFieldValue, errors, values, touched } = useFormikContext();

  return (
    <>
      <Wrapper>
        <TextBox>
          <Text body1>I have read the </Text>
          <Button
            label="Privace Policy"
            textStyle={{ textTransform: 'capitalize', color: colors.mediumBlue, fontSize: 16 }}
            onPress={onReadPress}
            padding={0}
          />
        </TextBox>
        <Checkbox
          checked={values[name]}
          touched={touched[name]}
          onPress={() => setFieldValue(name, !values[name])}
        />
      </Wrapper>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
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

export default PrivacePolicyCheckbox;
