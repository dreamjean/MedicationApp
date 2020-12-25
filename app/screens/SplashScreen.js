import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import Image from '../components/styles/Image';
import ImageBackground from '../components/styles/ImageBackground';
import Text from '../components/styles/Text';
import View from '../components/styles/View';
import { calender, colors, images } from '../constants';

const { IMG_BAR_HEIGHT } = calender;

const SplashScreen = ({ navigation }) => {
  return (
    <View container>
      <HeaderBar>
        <ImageBackground heading source={images[1]}>
          <Image header source={images[0]} />
          <Image picture1 source={images[2]} />
        </ImageBackground>
      </HeaderBar>
      <TextBox>
        <Text heading1 center>
          We are what we do
        </Text>
        <Text body2 center marginTop={10} opacity={0.65}>
          Thousand of people are using silent moon for smalls meditation
        </Text>
      </TextBox>
      <ButtonBox>
        <Button label="SignUp" primary onPress={() => navigation.navigate('SignUp')} />
        <View linking>
          <Text button left>
            Alreay have an account?{' '}
          </Text>
          <Button
            label="Log In"
            bgColor="transparent"
            padding={0}
            textStyle={{ color: colors.primary }}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ButtonBox>
      <StatusBar style="dark" />
    </View>
  );
};

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
    marginTop: space.m2,
  })}
`;

export default SplashScreen;
