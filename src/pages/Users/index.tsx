import { Stack, Tab } from '@mui/material';
import { TabsUi } from '../../components/TabsUi';
import { ListWoshers } from './ListWoshers';
import { ListClients } from './ListClients';

export const Users = () => {
  return (
    <Stack width="100%">
      <TabsUi
        listTabs={[
          {
            tab: Tab,
            resultTab: ListClients,
            name: 'Clients',
          },
          {
            tab: Tab,
            resultTab: ListWoshers,
            name: 'Woshers',
          },
        ]}
      />
    </Stack>
  );
};
