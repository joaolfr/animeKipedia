import styled from 'styled-components';
import metrics from 'src/utils/metrics'

export const Wrapper = styled.View`
  flex-direction: column;
  background: #042278;
  height: ${metrics.hp(53)}px;
  background:${props => props.theme.colors.primary}
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.View`
  flex-direction: row;
  height:100%;
  justify-content:center;
  align-items:center;
`;


export const RouteButton = styled.TouchableOpacity`

flex:1;
border-bottom-width:${ props=> props.isFocused ? metrics.hp(2):'0'}px;
border-bottom-color:${props=> props.isFocused ? props.theme.colors.auxiliary : 'transparent'}

border-left-width:${props=> props.label === 'Home' ? metrics.hp(0.5) : '0'}px;
border-left-color:${props=> props.label === 'Home' ? 'rgba(242, 242, 242, 0.3)' : 'blue'}

border-right-width:${props=> props.label === 'Home' ? metrics.hp(0.5) : '0'}px;
border-right-color:${props=> props.label === 'Home' ? 'rgba(242, 242, 242, 0.3)' : 'blue'}

height:100%;
align-items:center;
justify-content:center;
margin:0 2px 0 1px;
`;
