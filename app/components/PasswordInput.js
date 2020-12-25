import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';

import { colors } from '../constants';
import IconButton from './IconButton';
import RNTextInput from './styles/RNTextInput';
import View from './styles/View';

const PasswordInput = forwardRef(
  ({ touched, error, icon, secureTextEntry, onPress, ...rest }, ref) => {
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
          secureTextEntry={secureTextEntry}
        />
        <IconButton
          onPress={onPress}
          iconName={secureTextEntry ? 'eye-with-line' : 'eye'}
          color={reColor}
          borderColor={reColor}
          IconComponent={Entypo}
          size={22}
          backgroundColor={!touched ? colors.light : error ? colors.lightDanger : colors.bg}
        />
      </View>
    );
  },
);

export default PasswordInput;
