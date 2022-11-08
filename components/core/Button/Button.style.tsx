import styled from 'styled-components';
import { Button } from '@mui/material';

interface IButton {
  buttoncolor?: string;
  bordercolor?: string;
  borderradius?: string;
  padding?: string;
}

const StyledButton = styled(Button)<IButton>`
  color: ${({ buttoncolor }) => buttoncolor || '#fff'};
  border-color: ${({ bordercolor }) => bordercolor || '#fff'};
  border-radius: ${({ borderradius }) => borderradius || '16px'};
  padding: ${({ padding }) => padding || '5px 15px'};
`;


export default StyledButton;