import { CircularProgress } from '@mui/material';
import { useValidateWosher } from '../../hooks/useValidateWosher';
import { Stack, Tab } from '@mui/material';
import { TabsUi } from '../../components/TabsUi';
import { ListPending } from './ListPending';
import { ListApproved } from './ListApproved';
import { ListRejected } from './ListRejected';

export const ValidateUser = () => {
  const { isLoading } = useValidateWosher();
  return (
    <Stack>
      {isLoading ? (
        <CircularProgress size={30} sx={{ mt: 4 }} />
      ) : (
        <>
          <TabsUi
            listTabs={[
              {
                tab: Tab,
                resultTab: ListPending,
                name: 'Pending',
              },
              {
                tab: Tab,
                resultTab: ListApproved,
                name: 'Approved',
              },
              {
                tab: Tab,
                resultTab: ListRejected,
                name: 'Rejected',
              },
            ]}
          />
        </>
      )}
    </Stack>
  );
};
