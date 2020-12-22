import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { colors } from '../constants';
import Icon from './Icon';

const CheckBox = ({ checked }) => {
  return (
    <Container>
      <Icon
        backgroundColor={checked ? colors.primary : colors.white}
        borderColor={checked ? colors.primary : colors.gray}
        round={false}
        iconName="check"
        iconRatio={0.8}
      />
    </Container>
  );
};

const Container = styled(RectButton)``;

export default CheckBox;
