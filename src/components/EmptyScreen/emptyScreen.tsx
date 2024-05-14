import { Stack, Typography } from '@mui/material';
import { FcDeleteDatabase } from 'react-icons/fc';

export const EmptyScreen = () => {
  return (
    <Stack
      height="400px"
      width="400px"
      borderRadius={1}
      mt={2}
      bgcolor="primary.light"
      justifyContent="center"
      alignItems="center"
      boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
    >
      <Stack>
        <Typography>No information available</Typography>
      </Stack>
      <FcDeleteDatabase size={55} />
    </Stack>
  );
};
