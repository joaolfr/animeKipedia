import styled from 'styled-components';
import metrics from 'src/utils/metrics'

const TextStyled = styled.Text`
  font-size: ${props => {
    switch (props.type) {
      case 'large':
        return metrics.hp(24);
      case 'big':
        return metrics.hp(20);
      case 'max':
        return metrics.hp(16);
      case 'medium':
        return metrics.hp(14);
      case 'small':
        return metrics.hp(12);
      case 'little':
        return metrics.hp(11);
      case 'tiny':
        return metrics.hp(10);
      default:
        return metrics.hp(14);
    }
  }}px;
  color: ${props => props.color || '#1F253C'};
  font-family: ${props => {
    switch (props.weight) {
      case 'bold':
        return 'Poppins-ExtraBold';
      case 'heavy':
        return 'Poppins-Bold';
      case 'medium':
        return  'Poppins-Medium';
      case 'light':
        return  'Poppins-Light';
      case 'tiny':
        return  'Poppins-Thin';
      default:
        return  'Poppins-Regular';
    }
  }};
  ${props => props.uppercase && 'text-transform: uppercase'};
  ${props => props.letterSpace && 'letter-spacing: 1px;'};
`;

export default TextStyled;
