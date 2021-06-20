import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { Wrapper, ImageStyled } from './styles';
import { NoImage, ProfileImage } from 'src/assets/images';

const Image = ({
  uri, size, circle, around, square, margin
}) => {
  let ImageSource = NoImage;
  if (uri) {
    ImageSource = { uri, priority: FastImage.priority.normal };
  }
  return (
    <Wrapper size={size} circle={circle} around={around} square={square} margin={margin}>
      <ImageStyled
        source={ImageSource}
        size={size}
        circle={circle}
        around={around}
        square={square}
      />
    </Wrapper>
  );
};

Image.propTypes = {
  uri: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.number,
  circle: PropTypes.bool,
  around: PropTypes.bool,
  square: PropTypes.bool,
};

Image.defaultProps = {
  uri: '',
  size: 56,
  margin: 0,
  circle: false,
  around: false,
  square: false,
};

export default Image;
