import React from 'react';
import styled from 'styled-components';

import { images } from '../../constants';
import Text from '../styles/Text';
import SocialLogin from './SocialLogin';

const LinkingHeader = ({ onLoginFb, onLogInGoogle }) => {
  return (
    <Wrapper>
      <SocialLogin fb logo={images[7]} label="Continue with facebook" onPress={onLoginFb} />
      <SocialLogin
        logo={images[8]}
        label="Continue with google"
        marginTop={15}
        onPress={onLogInGoogle}
      />
      <Text button marginTop={30}>
        or log in with email
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.l1,
    marginTop: -space.xxl,
  })}
`;

export default LinkingHeader;
