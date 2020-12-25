import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import Image from '../components/styles/Image';
import Text from '../components/styles/Text';
import { calender, colors, images } from '../constants';

const WelcomeScreen = () => {
  return (
    <Container>
      <Header>
        <Image header white source={images[9]} />
        <Title heading2 marginTop={20}>
          Hi Afsar, Welcome
        </Title>
        <Title title2 opacity={0.9}>
          to Slient Moon
        </Title>
        <Title body2 center marginTop={15} opacity={0.75}>
          Explore the app,Find some peace of mind to prepare for medication
        </Title>
      </Header>
      <Image dot1 source={images[12]} />
      <Image dot2 source={images[13]} />
      <Image cloud1 source={images[11]} />
      <Box>
        <Image cloud2 source={images[10]} />
      </Box>
      <CircleBox>
        <CircleBack color={colors.lightBlue1}>
          <CircleBack color={colors.lightBlue2}>
            <CircleBack color={colors.lightBlue3}>
              <CircleCenter />
            </CircleBack>
          </CircleBack>
        </CircleBack>
      </CircleBox>
      <Wrapper>
        <Image picture2 source={images[14]} />
        <Footer>
          <Button
            label="Get Started"
            textStyle={{ color: colors.mediumBlue }}
            bgColor={colors.lightGray}
            onPress={() => true}
          />
        </Footer>
      </Wrapper>
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.primary,
  })}
`;

const Title = styled(Text)`
  ${({ theme: { colors } }) => ({
    color: colors.lightGray2,
  })}
`;

const Header = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.l2,
    paddingTop: space.s2,
  })}
`;

const Box = styled.View`
  align-items: flex-end;
`;

const CircleBox = styled.View`
  position: absolute;
  align-self: center;
  align-items: center;
  z-index: -1;

  ${({ theme: { space } }) => ({
    padding: space.l1,
    bottom: -space.l1,
  })}
`;

const CircleBack = styled.View`
  border-radius: 999px;

  ${({ color, theme: { space } }) => ({
    backgroundColor: color,
    padding: space.l2 + space.s1,
  })}
`;

const CircleCenter = styled.View`
  width: 260px;
  height: 260px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.lightBlue4,
    borderRadius: radii.xl,
  })}
`;

const Wrapper = styled.View`
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = styled.View`
  height: ${calender.FOOTER_HEIGHT}px;
  width: 100%;
  justify-content: center;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.primary,
    padding: space.l1,
  })}
`;

export default WelcomeScreen;
