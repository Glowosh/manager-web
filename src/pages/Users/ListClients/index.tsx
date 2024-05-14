import { CustomTabPanel } from "../../../components/CustomTabPanel";
import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useUsersData } from "../../../hooks/useUsersData";
import { EmptyScreen } from "../../../components/EmptyScreen/emptyScreen";

type Props = {
  index: number;
  value: number;
};

export const ListClients = ({ index, value }: Props) => {
  const { profiles, isLoading } = useUsersData();

  const fromTo = profiles?.map((item) => ({
    id: item?.id,
    fullname: `${item?.first_name} ${item?.last_name}`,
    email: item?.email,
    role: item?.role,
  }));

  return (
    <CustomTabPanel value={value} index={index}>
      {isLoading ? (
        <CircularProgress size={30} sx={{ mt: 4 }} />
      ) : (
        <>
          {profiles?.length === 0 ? (
            <EmptyScreen />
          ) : (
            <DataGrid
              columns={[
                { field: "fullname", headerName: "Full name", width: 300 },
                { field: "email", headerName: "E-mail", width: 300 },
                { field: "role", headerName: "Role", width: 200 },
              ]}
              rows={fromTo}
            />
          )}
        </>
      )}
    </CustomTabPanel>
  );
};
