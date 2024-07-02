import { CircularProgress, Stack, Typography } from "@mui/material";
import { useUsersData } from "../../hooks/useUsersData";
import { useWoshersData } from "../../hooks/useWoshersData";

export const Home = () => {
  const { profiles, isLoading } = useUsersData();
  const { profiles: wosherProfiles, isLoading: loadingProfile } =
    useWoshersData();

  const loadingState = isLoading || loadingProfile;

  return (
    <Stack direction="row" gap={2}>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={1}
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
        p={2}
        borderRadius="10px"
      >
        <Typography fontSize={18}>Total customers</Typography>
        <Stack
          height={60}
          width={60}
          borderRadius="11px"
          alignItems="center"
          justifyContent="center"
        >
          {loadingState ? (
            <CircularProgress size={20} />
          ) : (
            <Typography fontSize={28} fontWeight={700}>
              {profiles?.length}
            </Typography>
          )}
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={1}
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
        p={2}
        borderRadius="10px"
      >
        <Typography fontSize={18}>Total woshers</Typography>
        <Stack
          height={60}
          width={60}
          borderRadius="11px"
          alignItems="center"
          justifyContent="center"
        >
          {loadingState ? (
            <CircularProgress size={20} />
          ) : (
            <Typography fontSize={28} fontWeight={700}>
              {wosherProfiles?.length}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
