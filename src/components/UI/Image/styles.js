import styled from 'styled-components';
import FastImage from 'react-native-fast-image';

export const Wrapper = styled.View`
  height: ${(props) =>props.circle? props.size : 1.6*(props.size)}px;
  width: ${(props) => props.size}px;
  background: #c4c4c4;
  border-radius: ${(props) => {
    switch (true) {
      case props.circle: return props.size;
      case props.around: return props.size / 8;
      case props.square: return 0;
      default: return 0;
    }
  }}px;
  margin:${props => props.margin}px;
`;
export const ImageStyled = styled(FastImage)`
  height: 100%;
  width: 100%;
  border-radius: ${(props) => {
    switch (true) {
      case props.circle: return props.size;
      case props.around: return props.size / 8;
      case props.square: return 0;
      default: return 0;
    }
  }}px;
`;
