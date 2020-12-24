import { Platform } from 'react-native';

import colors from './colors';

export const isIos = Platform.OS === 'ios';

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ['Proxima-Nova-Bold', 'Proxima-Nova-Sbold', 'Proxima-Nova-Reg'],
  android: ['Montserrat-Bold', 'Montserrat-SemiBold', 'Montserrat-Regular'],
};

export default {
  colors,
  size: {
    s1: 11,
    s2: 12,
    body1: 14,
    body2: 16,
    body3: 18,
    title1: 20,
    title2: 24,
    heading1: 26,
    heading2: 30,
  },
  space: {
    n: 0,
    s1: 5,
    s2: 8,
    m1: 10,
    m2: 12,
    m3: 15,
    l1: 20,
    l2: 30,
    l3: 40,
    xl: 60,
    xl2: 80,
    xxl: 90,
  },
  radii: {
    n: 0,
    s1: 4,
    s2: 10,
    m: 25,
    l: 50,
  },

  getFont,
};
