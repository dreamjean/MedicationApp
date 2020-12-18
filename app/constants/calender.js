import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const bgAspectRatio = 504 / 415;
const BG_HEIGHT = width * bgAspectRatio;
const BAR_HEIGHT = height * 0.37;
const IMG_BAR_HEIGHT = height * 0.6;

export default {
  width,
  height,
  BAR_HEIGHT,
  BG_HEIGHT,
  IMG_BAR_HEIGHT,
};
