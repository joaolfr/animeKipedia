import styled from 'styled-components'
import metrics from 'src/utils/metrics'
import {Text, Image} from 'src/components/UI'

export const Wrapper = styled.View`
width:100%;
height:${metrics.hp(223)}px;
background:${props => props.theme.colors.primary_subtle}
margin-bottom:${metrics.hp(20)}px;
border-radius:${metrics.hp(10)}px;
overflow:hidden;
flex-direction:column;
position:relative;
` 

export const Span = styled(Text).attrs(()=>({
    type:'medium'
}))`

color:${props => props.theme.colors.white};

`
export const DetailContainer = styled.View`
flex:1;
width:100%;
flex-direction:row;
padding:${metrics.hp(10)}px;
` 
export const ImageComponent = styled(Image).attrs(()=>({
    size:85,
    margin:0,
    around:true
}))`


` 

// INFO
export const InfoContainer = styled.View`
flex:1;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
padding: 0 ${metrics.hp(15)}px;
` 

// RANK
export const RanksContainer = styled.View`
flex-direction:row;
justify-content:space-between;
width:100%;
margin-bottom:${metrics.hp(10)}px;
` 
export const RankCard = styled.View`
width:45%;
height:60px;
background:${props => props.theme.colors.primary_light};
flex-direction:column;
align-items:flex-start;
justify-content:center;
padding:${metrics.hp(5)}px;
` 
export const RankText = styled(Text).attrs(() => ({
    weight:'bold',
    type:'medium'
}))`
color:#fff
` 
export const RankTypeText = styled(Text).attrs(() => ({
    weight:'medium',
    type:'tiny'
}))`
color:#fff
` 

export const TitleText = styled(Text).attrs(() => ({
    weight:'heavy',
    type:'max'
}))`
color:#fff
` 

export const DurationText = styled(Text).attrs(() => ({
    weight:'medium',
    type:'tiny'
}))`
color:#fff
` 

export const DetailButton = styled.TouchableOpacity`
background:${props => props.theme.colors.secondary};
height:${metrics.hp(38)}px;
width:100%;
align-items:center;
justify-content:center;

`
