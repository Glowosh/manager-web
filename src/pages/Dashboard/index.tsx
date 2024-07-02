import { ReactNode } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { clearStorage } from "../../utils/storage";

const drawerWidth = 240;

type Props = {
  children?: ReactNode;
};

const listPages = [
  { name: "Home", path: "/dashboard" },
  { name: "Users", path: "/dashboard/users" },
  { name: "Validate Wosher", path: "/dashboard/validate-user" },
  { name: "Booking Completed", path: "/dashboard/cleaning-request" },
  { name: "Booking Upcoming", path: "/dashboard/booking-upcoming" },
  { name: "Booking Pending", path: "/dashboard/booking-pending" },
  { name: "Logout", path: "#" },
  // { name: 'Bookings', path: '#' },
  // { name: 'Work Zones', path: '#' },
  // { name: 'Woshers Availability', path: '#' },
  // { name: 'Revenue per Day', path: '#' },
  // { name: 'Revenue per Month', path: '#' },
  // { name: 'New Users this week', path: '#' },
  // { name: 'New Users this month', path: '#' },
];

export const Dashboard = ({ children }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Stack direction="row" width="100%">
      <Stack height="100vh" bgcolor="primary.light">
        <Box sx={{ display: "flex" }}>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                bgcolor: "primary.light",
              },
            }}
          >
            <Stack my={2} mx={8}>
              <img
                src="/glowosh.png"
                width={100}
                height={100}
                alt="Logo glowosh"
              />
            </Stack>

            <Stack sx={{ overflow: "auto" }}>
              <List>
                {listPages?.map((item) => (
                  <ListItem
                    key={item?.name}
                    disablePadding
                    sx={{
                      bgcolor: pathname === item?.path ? "primary.main" : "",
                    }}
                  >
                    <ListItemButton
                      onClick={() => {
                        if (item?.path === "#") {
                          clearStorage();
                          navigate("/");
                          return;
                        }
                        navigate(item?.path);
                      }}
                    >
                      <ListItemText
                        primary={item?.name}
                        sx={{
                          color: pathname === item?.path ? "white" : "",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Drawer>
        </Box>
      </Stack>
      <Stack m={2}>{children}</Stack>
    </Stack>
  );
};
