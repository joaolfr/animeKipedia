import styled from 'styled-components';
import FastImage from 'react-native-fast-image';

export const Wrapper = styled.View`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: #c4c4c4;
  border-radius: ${(props) => {
    switch (true) {
      case props.circle: return props.size;
      case props.around: return props.size / 8;
      case props.square: return 0;
      default: return 0;
    }
  }}px;
`;
export const ImageStyled = styled(FastImage)`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => {
    switch (true) {
      case props.circle: return props.size;
      case props.around: return props.size / 8;
      case props.square: return 0;
      default: return 0;
    }
  }}px;
`;
