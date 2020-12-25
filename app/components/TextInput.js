import { MaterialIcons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';

import { colors } from '../constants';
import Icon from './Icon';
import RNTextInput from './styles/RNTextInput';
import View from './styles/View';

const TextInput = forwardRef(({ touched, error, icon, ...rest }, ref) => {
  const dangerPrimery = error ? colors.danger : colors.primary;
  const reColor = !touched ? colors.lightBlue : dangerPrimery;

  return (
    <View inputBox {...{ error, touched }}>
      {icon && <MaterialIcons name={icon} color={reColor} size={26} />}
      <RNTextInput
        {...rest}
        {...{ ref }}
        placeholderTextColor={colors.lightBlue}
        selectionColor={colors.primary}
        underlineColorAndroid="transparent"
      />
      {touched && <Icon iconName={error ? 'close' : 'check'} size={22} backgroundColor={reColor} />}
    </View>
  );
});

export default TextInput;
