import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';

const SocialLogin = ({ fb, label, logo, marginTop, onPress }) => {
  return (
    <Wrapper {...{ fb, marginTop, onPress }}>
      <Container {...{ fb }}>
        <Image logo source={logo} />
        <Label button {...{ fb }}>
          {label}
        </Label>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(RectButton)`
  ${({ fb, marginTop, theme: { colors, radii } }) => ({
    borderColor: fb ? colors.facebookBg : colors.gray,
    borderRadius: radii.m,
    borderWidth: 1,
    marginTop,
  })}
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ fb, theme: { colors, space, radii } }) => ({
    backgroundColor: fb ? colors.facebookBg : colors.white,
    borderRadius: radii.m,
    padding: space.m2,
    paddingLeft: space.l3,
  })}
`;

const Label = styled(Text)`
  ${({ fb, theme: { colors, space } }) => ({
    color: fb ? colors.white : colors.darkBg,
    marginLeft: space.l2,
  })}
`;

export default SocialLogin;
