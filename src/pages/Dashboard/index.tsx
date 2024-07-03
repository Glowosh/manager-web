import { ReactNode, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton,
  useMediaQuery,
  Toolbar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { clearStorage } from "../../utils/storage";
import { theme } from "../../theme";

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
];

export const Dashboard = ({ children }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Stack direction="column" sx={{ minHeight: "100vh" }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <Stack direction="row" flexGrow={1}>
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={drawerOpen || !isMobile}
          onClose={closeDrawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: isMobile ? "primary.main" : "primary.light",
            },
            ...(isMobile && {
              "& .MuiBackdrop-root": {
                backgroundColor: "transparent",
              },
            }),
            ...(isMobile && {
              zIndex: 1200,
            }),
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
                    bgcolor:
                      pathname === item?.path
                        ? isMobile
                          ? "white"
                          : "primary.main"
                        : "",
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      if (item?.path === "#") {
                        clearStorage();
                        navigate("/");
                        if (isMobile) {
                          setDrawerOpen(false);
                        }
                        return;
                      }
                      navigate(item?.path);
                      if (isMobile) {
                        setDrawerOpen(false);
                      }
                    }}
                  >
                    <ListItemText
                      primary={item?.name}
                      sx={{
                        color:
                          pathname === item?.path
                            ? isMobile
                              ? ""
                              : "white"
                            : "",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Drawer>

        <Stack m={2} sx={{ flexGrow: 1 }}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};
