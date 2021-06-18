import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions, PixelRatio } from 'react-native';

const baseWidth = 375;
const baseHeight = 812;

const wpPx = (pixelValue) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel((screenWidth * pixelValue) / baseWidth);
};

const hpPx = (pixelValue) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * pixelValue) / baseHeight,
  );
};

const metrics = {
  px5: wp(1.35),
  px7: wp(1.86),
  px8: wp(2.14),
  px10: wp(2.66),
  px12: wp(3.2),
  px13: wp(3.46),
  px14: wp(3.73),
  px15: wp(4),
  px16: wp(4.26),
  px17: wp(4.53),
  px18: wp(4.8),
  px20: wp(5.3),
  px22: wp(5.86),
  px24: wp(6.4),
  px26: wp(6.94),
  px28: wp(7.46),
  px30: wp(8),
  px32: wp(8.53),
  px36: wp(9.6),
  px40: wp(10.6),
  px48: wp(12.8),
  px80: wp(21.2),
  width(value) {
    return wp(value);
  },
  height(value) {
    return hp(value);
  },
  wp(value) {
    return wpPx(value);
  },
  hp(value) {
    return hpPx(value);
  },
};

export default metrics;
