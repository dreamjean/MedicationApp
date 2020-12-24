import { MaterialIcons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { colors } from '../constants';
import Icon from './Icon';

const TextInput = forwardRef(({ touched, error, icon, ...rest }, ref) => {
  const dangerPrimery = error ? colors.danger : colors.primary;
  const reColor = !touched ? colors.lightBule : dangerPrimery;

  return (
    <Container {...{ error, touched }}>
      {icon && <MaterialIcons name={icon} color={reColor} size={26} />}
      <Input
        {...rest}
        {...{ ref }}
        placeholderTextColor={colors.lightBule}
        selectionColor={colors.primary}
        underlineColorAndroid="transparent"
      />
      {touched && <Icon iconName={error ? 'close' : 'check'} size={22} backgroundColor={reColor} />}
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ touched, error, theme: { colors, radii, space } }) => ({
    backgroundColor: !touched ? colors.light : error ? colors.lightDanger : colors.bg,
    borderRadius: radii.s2,
    paddingVertical: space.m1,
    paddingHorizontal: space.m2,
    marginVertical: space.s2,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, getFont, space, size } }) => ({
    color: colors.dark,
    fontSize: size.body3,
    fontFamily: getFont(2),
    marginHorizontal: space.s2,
  })}
`;

export default TextInput;
