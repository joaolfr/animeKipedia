import styled from 'styled-components'
import metrics from 'src/utils/metrics'
import {Text} from 'src/components/UI'

export const Span = styled(Text).attrs(()=>({
    type:'medium'
}))`

color:${props => props.theme.colors.white};

`

export const TouchPress = styled.TouchableOpacity`
background:green;
margin-bottom:${metrics.hp(20)}px;
height:50px;

`