import styled from 'styled-components';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.View`
  flex-direction: column;
  background: #042278;
  height: 80px;
  background:${props => props.theme.colors.secondary}
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.View`
  flex-direction: row;
`;
export const Text = styled.Text``;

export const MovieIcon = styled(Ionicons).attrs(props => ({
  name: 'play-circle-outline',
  size: 60,
  color: 'white',
}))`
  position: absolute;
  top: -35px;
  
`;

export const Esphere = styled.Image`
position:absolute;
top:-30px;
height:50px;
width:50px;
`

export const HomeIcon = styled(Ionicons).attrs(props => ({
  name: props.isFocused ? 'home' : 'home-outline',
  color: 'white',
  size: 30,
}))``;
export const FavoriteIcon = styled(Ionicons).attrs(props => ({
  name: props.isFocused ? 'star' : 'star-outline',
  color: 'white',
  size: 30,
}))``;

export const RouteButton = styled.TouchableOpacity``;
