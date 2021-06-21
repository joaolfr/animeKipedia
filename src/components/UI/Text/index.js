import styled from 'styled-components';

const TextStyled = styled.Text`
  font-size: ${props => {
    switch (props.type) {
      case 'large':
        return 24;
      case 'big':
        return 20;
      case 'max':
        return 16;
      case 'medium':
        return 14;
      case 'small':
        return 12;
      case 'little':
        return 11;
      case 'tiny':
        return 10;
      default:
        return 14;
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
