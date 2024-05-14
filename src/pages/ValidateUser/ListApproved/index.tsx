import { CustomTabPanel } from '../../../components/CustomTabPanel';
import { CircularProgress, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useValidateWosher } from '../../../hooks/useValidateWosher';
import { EmptyScreen } from '../../../components/EmptyScreen/emptyScreen';
import { showModal } from '../../../components/ModalWrapping';
import { Validate } from '../Validate';
import { RiInformationLine } from 'react-icons/ri';
import { theme } from '../../../theme';

type Props = {
  index: number;
  value: number;
};

export const ListApproved = ({ index, value }: Props) => {
  const { profiles, isLoading } = useValidateWosher({
    status: 'approved',
  });

  const fromTo = profiles?.map((item) => ({
    rowId: item?.id,
    id: item?.wosher_id,
    fullname: item?.full_name,
    dateOfBirth: item?.date_of_birth,
    status: item?.status,
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
                { field: 'fullname', headerName: 'Full name', width: 300 },
                {
                  field: 'dateOfBirth',
                  headerName: 'Date of birth',
                  width: 200,
                },
                { field: 'status', headerName: 'Status', width: 200 },
                {
                  field: 'action',
                  headerName: '',
                  width: 50,
                  renderCell: ({ row }) => (
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      height="100%"
                      onClick={() => showModal(<Validate {...row} />)}
                    >
                      <RiInformationLine
                        size={25}
                        cursor="pointer"
                        color={theme?.palette?.primary?.main}
                      />
                    </Stack>
                  ),
                },
              ]}
              rows={fromTo}
              slots={{ toolbar: GridToolbar }}
            />
          )}
        </>
      )}
    </CustomTabPanel>
  );
};
