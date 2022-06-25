import styled from '@emotion/styled';
import { Button as ButtonChakra } from '@chakra-ui/react';

const Button = styled(ButtonChakra)`
  padding: 24px 24px;
  border-radius: 4px;
  background: ${props => (props.primary ? 'transparent' : '#d23f00')};
  color: ${props => (props.primary ? '#ea4600' : 'white')};
  border: ${props =>
    props.primary ? '1px solid rgba(255, 255, 255, 0.35)' : 'transparent'};
  &:hover {
    background: ${props => (props.primary ? 'transparent' : '#f04901')};
    border: ${props => (props.primary ? '1px solid #f04901' : 'transparent')};
  }
`;

export default Button;
