import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';

import { calender, colors, images } from '../../constants';
import IconButton from '../IconButton';
import Text from '../styles/Text';
import View from '../styles/View';
import LinkingHeader from './LinkingHeader';

const { BAR_HEIGHT } = calender;

const Container = ({ children, heading, ...rest }) => {
  const navigation = useNavigation();

  return (
    <View container>
      <Bar>
        <Vector left={-10} top={-5} source={images[3]} />
        <Vector right={6} top={-3} source={images[4]} />
        <Vector top={90} source={images[5]} />
        <Vector right={0} top={110} source={images[6]} />
        <Text heading1 center marginTop={125}>
          {heading}
        </Text>
      </Bar>
      <IconButton
        style={{ position: 'absolute', top: 35, left: 15 }}
        iconName="arrowleft"
        IconComponent={AntDesign}
        size={40}
        color={colors.gray}
        borderColor={colors.whiteShade}
        onPress={() => navigation.goBack()}
      />
      <LinkingHeader {...rest} />
      {children}
    </View>
  );
};

const Bar = styled.View`
  height: ${BAR_HEIGHT}px;
  overflow: hidden;

  justify-content: space-between;
`;

const Vector = styled.Image`
  position: absolute;

  ${({ top, left, right, bottom }) => ({
    bottom,
    left,
    right,
    top,
  })}
`;

export default Container;
