import styled from 'styled-components'
import {Text} from 'src/components/UI'

export const Span = styled(Text).attrs(()=>({
    type:'big'
}))`

color:${props => props.theme.colors.white};

`
