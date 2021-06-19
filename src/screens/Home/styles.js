import styled from 'styled-components'


export const Wrapper = styled.View`
flex:1;
width:100%;
background:${props => props.theme.colors.primary}
padding:10px;
`

export const Span = styled.Text`
font-size:16px;
color:${props => props.theme.colors.white};

`
