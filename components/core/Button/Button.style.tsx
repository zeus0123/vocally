import styled from 'styled-components';
import { Button } from '@mui/material';

interface IButton {
  buttonColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
}

const StyledButton = styled(Button)<IButton>`
  color: ${({ buttonColor }) => buttonColor || '#fff'};
  border-color: ${({ borderColor }) => borderColor || '#fff'};
  border-radius: ${({ borderRadius }) => borderRadius || '16px'};
  padding: ${({ padding }) => padding || '5px 15px'};
`;


export default StyledButton;