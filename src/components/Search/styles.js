import styled from 'styled-components'
import metrics from 'src/utils/metrics'

export const Wrapper = styled.View`
width:100%;
height:${metrics.hp(45)}px;
background:#fff;
flex-direction:row;
background:${props => props.theme.colors.primary_subtle};
align-items:center;
padding:0 ${metrics.hp(10)}px;
border-radius:15px;
` 

export const SearchInput = styled.TextInput.attrs((props)=>({
    placeholderTextColor: props.theme.colors.auxiliary
}))`
flex:1;
margin-left:${metrics.hp(10)}px;
font-size:${metrics.hp(16)}px;
color:${props => props.theme.colors.auxiliary};
height:100%;
` 