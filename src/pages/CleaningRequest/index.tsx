import { DataGrid } from '@mui/x-data-grid';
import { useCleaningRequest } from '../../hooks/useCleaningRequest';
import { Stack } from '@mui/material';
import { showModal } from '../../components/ModalWrapping';
import { FaEdit } from 'react-icons/fa';
import { theme } from '../../theme';
import { Edit } from './Edit';

export const CleaningRequest = () => {
  const { cleaningRequests, isLoading } = useCleaningRequest();

  const fromTo = cleaningRequests?.map((item) => ({
    washer_id: item?.washer_id,
    address: item?.address,
    scheduleHour: item?.schedule_hour,
    serviceDate: item?.service_date,
    requestedAt: new Date(item?.created_at)?.toLocaleDateString('pt-br'),
    washStatus: item?.wash_status,
    modelCar: item?.model_car,
    totalPrice: item?.total_cost,
    id: item?.id,
    client_id: item?.client_request_id,
  }));

  return (
    <DataGrid
      columns={[
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'serviceDate', headerName: 'Service date', width: 110 },
        { field: 'requestedAt', headerName: 'Requested in', width: 110 },
        { field: 'washStatus', headerName: 'Wash status', width: 120 },
        { field: 'modelCar', headerName: 'Model car', width: 150 },
        { field: 'totalPrice', headerName: 'Total', width: 100 },
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
              onClick={() => showModal(<Edit {...row} />)}
            >
              <FaEdit
                size={20}
                cursor="pointer"
                color={theme?.palette?.primary?.main}
              />
            </Stack>
          ),
        },
      ]}
      rows={fromTo}
      loading={isLoading}
    />
  );
};
