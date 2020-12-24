import { MaterialIcons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';

import { colors } from '../constants';
import Icon from './Icon';
import Input from './styles/Input';
import View from './styles/View';

const TextInput = forwardRef(({ touched, error, icon, ...rest }, ref) => {
  const dangerPrimery = error ? colors.danger : colors.primary;
  const reColor = !touched ? colors.lightBule : dangerPrimery;

  return (
    <View inputBox {...{ error, touched }}>
      {icon && <MaterialIcons name={icon} color={reColor} size={26} />}
      <Input
        {...rest}
        {...{ ref }}
        placeholderTextColor={colors.lightBule}
        selectionColor={colors.primary}
        underlineColorAndroid="transparent"
      />
      {touched && <Icon iconName={error ? 'close' : 'check'} size={22} backgroundColor={reColor} />}
    </View>
  );
});

export default TextInput;
