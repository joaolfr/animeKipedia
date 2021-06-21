import styled from 'styled-components';
import {Text} from 'src/components/UI';
import metrics from 'src/utils/metrics';

export const Wrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))`
flex:1;
width:100%;
background:${props => props.theme.colors.primary_light}
padding:${metrics.hp(10)}px;
`;
export const Circle = styled.View`
  width: 678px;
  height: 678px;
  border-radius: 339px;
  top: -527px;
  position: absolute;
  background: ${props => props.theme.colors.primary_subtle};
`;
export const Header = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.hp(40)}px;
  margin-bottom: ${metrics.hp(20)}px;
`;
export const Name = styled(Text).attrs(() => ({
  type: 'large',
  weight: 'heavy',
}))`
  color: ${props => props.theme.colors.white};

  width: 100%;
  text-align: center;
  margin-top: ${metrics.hp(15)}px;
`;

//PROFILE INFO
export const Container = styled.View`
  flex: 1;
  width: 100%;
`;
export const Span = styled(Text).attrs(() => ({
  type: 'medium',
  weight: 'medium',
}))`
  color: ${props => props.theme.colors.white};

  width: 100%;
  font-weight: 600;
  text-align: center;
`;
export const InfoCard = styled.View`
  width: 100%;
  background: ${props => props.theme.colors.primary_subtle};
  height: ${metrics.hp(248)}px;
  margin-bottom: ${metrics.hp(8)}px;
  border-radius: 10px;
  flex-direction: row;
  overflow: hidden;
  padding: ${metrics.hp(15)}px;
`;
export const DescriptionContainer = styled.View`
  flex: 1;
  height: 100%;
`;
export const InterestsContainer = styled.View`
  height: 100%;
  width: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const DescriptionText = styled(Text).attrs(props => ({
  type: props.landScape ? 'large' : 'medium',
  weight: 'medium',
}))`
  color: ${props => props.theme.colors.white};

  width: 100%;
  font-weight: 600;
  text-align: center;
  text-align: justify;
`;
