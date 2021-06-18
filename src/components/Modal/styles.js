import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

// import {Text} from '../../UI';

export const Wrapper = styled.View`

  
  background: #000;
  align-items: center;
  justify-content: flex-start;
 height:100%;
  width:100%;
  
  
`;

export const ReturnButton = styled(Ionicons).attrs(props => ({
  name: 'close-outline',
  color: 'white',
  size: 40,
  // : 'star-outline'
}))`
  position: absolute;
  top: 1px;

  margin-left: 10px;
`;

export const Span = styled.Text`
color:#fff;
font-size:12px;
` 

export const FavButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const FavoriteOption = styled(Ionicons).attrs(props => ({
  name: props.isFavorite ? 'star' : 'star-outline',
  color: 'yellow',
  size: 50,
  // : 'star-outline'
}))``;