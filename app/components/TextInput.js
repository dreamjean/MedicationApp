import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../constants';

const TextInput = ({ touched, error, icon, ...rest }) => {
  const dangerPrimery = error ? colors.danger : colors.primary;
  const reColor = !touched ? colors.lightBule : dangerPrimery;

  return (
    <Container>
      {icon && <MaterialIcons name={icon} color={reColor} size={24} />}
      <Input
        {...rest}
        placeholderTextColor={touched ? colors.violet : colors.gray}
        selectionColor={colors.primary}
        underlineColorAndroid="transparent"
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.light,
    borderRadius: radii.s2,
    paddingVertical: space.m1,
    paddingHorizontal: space.m2,
    marginVertical: space.m1,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, getFont, space, size } }) => ({
    color: colors.dark,
    fontSize: size.body1,
    fontFamily: getFont(2),
    marginHorizontal: space.s2,
  })}
`;

export default TextInput;
