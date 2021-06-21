import styled from 'styled-components'
import metrics from 'src/utils/metrics'
import {Text} from 'src/components/UI'

export const SwitchView = styled.View`
width:${metrics.hp(244)}px;
height:${metrics.hp(37)}px;
flex-direction:row;
margin:${metrics.hp(20)}px 0;
background:${props => props.theme.colors.primary_subtle};
padding:${metrics.hp(5)}px;
border-radius:${metrics.hp(15)}px;
` 
export const SwitchButton = styled.TouchableOpacity`
background:${props => props.isActive ? props.theme.colors.primary_light :'transparent'};
flex:1;
height:100%;
align-items:center;
justify-content:center;
border-radius:${metrics.hp(15)}px;

` 


export const Span = styled(Text).attrs(() => ({
    type:'medium',
}))`
;
color:${props => props.theme.colors.auxiliary};

`