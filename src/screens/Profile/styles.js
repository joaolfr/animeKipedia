import styled from 'styled-components'
import {Text} from 'src/components/UI'

export const Wrapper = styled.View`
flex:1;
width:100%;
background:${props => props.theme.colors.primary}
padding:10px;
`

export const Span = styled(Text).attrs(() =>({
    type:'big',
    weight:'medium'
}))`

color:${props => props.theme.colors.white};
height:100px;
width:100%;
margin-bottom:10px;
font-weight:600;
`

export const TouchPress = styled.TouchableOpacity`
background:green;
`