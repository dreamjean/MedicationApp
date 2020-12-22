import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import Image from '../components/styles/Image';
import ImageBackground from '../components/styles/ImageBackground';
import Text from '../components/styles/Text';
import { calender, colors, images } from '../constants';

const { IMG_BAR_HEIGHT } = calender;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <HeaderBar>
        <ImageBackground heading source={images[0]}>
          <Image header source={images[1]} />
          <Image picture source={images[2]} />
        </ImageBackground>
      </HeaderBar>
      <TextBox>
        <Text heading1 center>
          We are what we do
        </Text>
        <Text body2 center marginTop={10} opacity={0.35}>
          Thousand of people are using silent moon for smalls meditation
        </Text>
      </TextBox>
      <ButtonBox>
        <Button label="Sign Up" primary onPress={() => navigation.navigate('Sign Up')} />
        <Wrapper>
          <Text button>Alreay have an account? </Text>
          <Button
            label="Log In"
            bgColor="transparent"
            padding={0}
            textStyle={{ color: colors.primary }}
            onPress={() => navigation.navigate('Sign In')}
          />
        </Wrapper>
      </ButtonBox>
      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const HeaderBar = styled.View`
  height: ${IMG_BAR_HEIGHT}px;
`;

const TextBox = styled.View`
  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l2,
    marginTop: space.l1,
    marginBottom: space.l2,
  })}
`;

const ButtonBox = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.l1,
  })}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ theme: { space } }) => ({
    padding: space.m3,
  })}
`;

export default WelcomeScreen;
