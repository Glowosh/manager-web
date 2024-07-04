import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FcDeleteDatabase } from "react-icons/fc";
import { theme } from "../../theme";

export const EmptyScreen = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      height={isMobile ? "200px" : "400px"}
      width={isMobile ? "280px" : "400px"}
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
