import styled from 'styled-components';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.View`
  flex-direction: column;
  background: #0e1c1d;
  height: 80px;
  border-top-width: 3px;
  border-top-color: white;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.View`
  flex-direction: row;
`;
export const Text = styled.Text``;

export const MovieIcon = styled(Material).attrs(props => ({
  name: 'live-tv',
  size: 60,
  color: props.theme.colors.secondary,
}))`
  position: absolute;
  top: -35px;
  background: ${props => props.theme.colors.primary};
`;

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
