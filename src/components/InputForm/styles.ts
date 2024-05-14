import { TextField, styled } from '@mui/material';

const WrapperInput = styled(TextField)`
  > div {
    background-color: ${({ theme }) => theme.palette.common.white};
    border: none;
    font-size: 12px;
  }
`;
export { WrapperInput };
