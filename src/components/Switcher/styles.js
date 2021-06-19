import styled from 'styled-components'
import metrics from 'src/utils/metrics'


export const SwitchView = styled.View`
width:100%;
height:${metrics.hp(50)}px;
flex-direction:row;

` 
export const SwitchButton = styled.TouchableOpacity`
background:${props => props.isActive ? 'orange':'gray'};
flex:1;
height:100%;
align-items:center;
justify-content:center;

` 


export const Span = styled.Text`
font-size:16px;
color:${props => props.theme.colors.white};

`