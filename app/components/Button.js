import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import Text from './styles/Text';

const Button = ({
  borderColor,
  bgColor,
  dark,
  label,
  marginTop,
  onPress,
  padding = 15,
  primary,
  textStyle,
}) => {
  return (
    <Container {...{ borderColor, bgColor, padding, primary, marginTop }} onPress={onPress}>
      <Text button style={textStyle} {...{ primary, dark }}>
        {label}
      </Text>
    </Container>
  );
};

const borderStyle = css`
  background-color: transparent;
  border-width: 2px;

  ${({ borderColor }) => ({
    borderColor,
  })}
`;

const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;

  ${({ bgColor, primary, padding, marginTop, theme: { colors, radii } }) => ({
    backgroundColor: bgColor ? bgColor : primary ? colors.primary : colors.grey,
    borderRadius: radii.m,
    padding,
    marginTop,
  })}

  ${({ borderColor }) => borderColor && borderStyle}
`;

export default Button;
