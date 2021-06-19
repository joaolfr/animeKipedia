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

export const TouchPress = styled.TouchableOpacity`
background:green;
margin-top:10px;
height:50px;
`

export const SwitchView = styled.View`
width:100%;
height:50px;
flex-direction:row;

` 
export const SwitchButton = styled.TouchableOpacity`
background:${props => props.isActive ? 'orange':'gray'};
flex:1;
height:100%;
align-items:center;
justify-content:center;

` 