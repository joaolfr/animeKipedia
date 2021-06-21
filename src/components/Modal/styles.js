import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import metrics from 'src/utils/metrics'
import {Text, Image} from 'src/components/UI';
import {Heart} from 'src/assets/icons/tab'
import {RemoveFavorite} from 'src/assets/icons'

export const ModalWrapper = styled(Modal).attrs(() => ({
animationIn:'bounceInUp'
}))`
margin:0
` 

export const Wrapper = styled.View`

  background: ${props => props.theme.colors.primary_subtle};
  align-items: center;
  justify-content: flex-start;
  height:${props => props.length > 1000 ? '100' : props.length <700 ? '70' : (props.length/10) }%;
  min-height:70%;
  width:100%;
  position:absolute;
  bottom:0;
`;

export const Header = styled.ImageBackground.attrs(() => ({
 
}))`
 
  width:100%;
  height:${metrics.hp(200)}px;
  resize-mode: stretch;
  justify-content: center;
  align-items:flex-end;
  justify-content:flex-end;
`;

// CLOSE ELEMENTS
export const CloseWrapper = styled.TouchableOpacity`
width:100%;
height:${metrics.hp(30)}px;
position:absolute;
top:0;
background:transparent;
align-items:center;
justify-content:flex-end;
` 

export const ReturnButton = styled.View`
  height:${metrics.hp(5)}px;
  width:${metrics.hp(134)}px;
  background:${props => props.theme.colors.primary_subtle};
`;

// HEADER ELEMENTS
export const PosterImage = styled(Image).attrs(()=>({
    size:126,
    style:'position:absolute, bottom:-83px',
    circle:true
}))`
  position: absolute;
  bottom: ${metrics.hp(-63)}px;
  left:${metrics.hp(20)}px;
` 

export const RankWrapper = styled.View`
width:50%;
height:100px;
flex-direction:column;
align-items:flex-end;
justify-content:space-evenly;
padding-right:${metrics.hp(10)}px;
` 
export const RankText = styled(Text).attrs(()=>({
    type:'small'
}))`

color:${props => props.theme.colors.white};
background:${props => props.theme.colors.primary_subtle};
border-radius:10px;
align-self:flex-end;
padding:5px;
` 
//INFO ELEMENTS
export const Span = styled(Text).attrs(()=>({
    type:'medium'
}))`

color:${props => props.theme.colors.white};

`

export const TitleWrapper = styled.View`
width:60%;
height:${metrics.hp(70)}px;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
align-self:flex-end;
padding-top:10px;
` 
export const TitleText = styled(Text).attrs(()=>({
    type:'max',
    weight:'heavy'
}))`

color:${props => props.theme.colors.white};

`

export const DurationText = styled(Text).attrs(() => ({
    weight:'medium',
    type:'tiny'
}))`
color:#fff
` 

//SINOPSE ELEMENTS

export const SinopseWrapper = styled.View`
flex:1;
flex-direction:column;
width:100%;
padding:${metrics.hp(20)}px;
` 

export const Sinopse = styled(Text).attrs(()=>({
    type:'medium',
    weight:'heavy'
}))`

color:${props => props.theme.colors.white};

`
export const SinopseText = styled(Text).attrs((props)=>({
    type: props.landScape ? 'max' : 'little',
    weight:'medium'
}))`

color:${props => props.theme.colors.white};

`
// FOOTER ELEMENTS
export const FavButton = styled.TouchableOpacity`
  
 
  height:${metrics.hp(46)}px;
  width: 90%;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  background:${props => props.theme.colors.secondary};
  margin: 5px ${metrics.hp(20)}px;
  border-radius:10px;
`;
export const FavText = styled(Text).attrs(()=>({
    type:'medium',
    weight:'medium'
}))`

color:${props => props.theme.colors.white};
margin-left:${metrics.hp(10)}px;

`
export const FavoriteOption = styled(Heart).attrs(props => ({
  width:24,
  height:24,
  fill:'#fff'
  // : 'star-outline'
}))``;

// 
// 
export const RemoveButton = styled.TouchableOpacity`
  
 
  height:${metrics.hp(46)}px;
  width: 90%;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  background:${props => props.theme.colors.secondary_dark};
  margin: 5px ${metrics.hp(20)}px;
  border-radius:10px;
`;
export const RemoveText = styled(Text).attrs(()=>({
    type:'medium',
    weight:'medium'
}))`

color:${props => props.theme.colors.white};
margin-left:${metrics.hp(10)}px;

`
export const RemoveOption = styled(RemoveFavorite).attrs(props => ({
  width:24,
  height:24,
  fill:'#fff'
  // : 'star-outline'
}))``;