import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons';


export const Wrapper = styled.View`
flex:1;
width:100%;
background:${props => props.theme.colors.primary}
`

export const Span = styled.Text`
color:#fff;
font-size:16px;
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