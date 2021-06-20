import styled from 'styled-components'

export const Wrapper = styled.View`
flex:1;
width:100%;
background:${props => props.theme.colors.primary_light};
padding:10px 10px 0 10px;

align-items:center;

`

export const Span = styled.Text`
font-size:16px;
color:${props => props.theme.colors.white};

`
