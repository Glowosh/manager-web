import { CustomTabPanel } from "../../../components/CustomTabPanel";
import { CircularProgress, Stack, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useWoshersData } from "../../../hooks/useWoshersData";
import { EmptyScreen } from "../../../components/EmptyScreen/emptyScreen";
import { CardTypeWoshers } from "../../../components/CardTypeWoshers/CardTypeWoshers";

type Props = {
  index: number;
  value: number;
};

export const ListWoshers = ({ index, value }: Props) => {
  const { profiles, isLoading } = useWoshersData();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const sortedProfiles = [...profiles]?.sort((a, b) => {
    const isAPending = a?.status_register === "pending";
    const isBPending = b?.status_register === "pending";

    if (isAPending && !isBPending) {
      return -1;
    }
    if (!isAPending && isBPending) {
      return 1;
    }

    return 0;
  });

  const fromTo = sortedProfiles?.map((item) => ({
    id: item?.id,
    fullname: `${item?.first_name} ${item?.last_name}`,
    email: item?.email,
    role: item?.role,
    status: item?.status_register || "Validation not sent",
  }));

  return (
    <CustomTabPanel value={value} index={index}>
      {isLoading ? (
        <CircularProgress size={30} sx={{ mt: 4 }} />
      ) : (
        <>
          {profiles?.length === 0 ? (
            <EmptyScreen />
          ) : isMobile ? (
            <Stack spacing={2}>
              {fromTo.map((item) => (
                <CardTypeWoshers
                  key={item.id}
                  fullname={item.fullname}
                  email={item.email}
                  role={item.role}
                  status={item.status}
                />
              ))}
            </Stack>
          ) : (
            <DataGrid
              columns={[
                { field: "fullname", headerName: "Full name", width: 300 },
                { field: "email", headerName: "E-mail", width: 300 },
                { field: "role", headerName: "Role", width: 200 },
                { field: "status", headerName: "Register status", width: 200 },
              ]}
              rows={fromTo}
            />
          )}
        </>
      )}
    </CustomTabPanel>
  );
};
