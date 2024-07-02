import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { theme } from "../../theme";
import { showModal } from "../ModalWrapping";
import { Edit } from "../../pages/BookingPending/Edit";
import { useProfile } from "../../hooks/useProfile";

export const CardTypeBookings = ({ data }: { data: any[] }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {data?.map((item: any) => {
        const { profile: wosher } = useProfile({ id: item.washer_id });
        const { profile: client } = useProfile({ id: item.client_id });

        return (
          <Card key={item.id} style={{ width: 300 }}>
            <CardContent>
              <Typography variant="body2" component="div" fontWeight="bold">
                Address:{" "}
                <span style={{ fontWeight: "normal" }}>{item.address}</span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Schedule Hour:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {item.scheduleHour}
                </span>
              </Typography>
              <Typography variant="body2" component="p" fontWeight="bold">
                Service Date:{" "}
                <span style={{ fontWeight: "normal" }}>{item.serviceDate}</span>
              </Typography>
              <Typography variant="body2" component="p" fontWeight="bold">
                Requested At:{" "}
                <span style={{ fontWeight: "normal" }}>{item.requestedAt}</span>
              </Typography>
              <Typography variant="body2" component="p" fontWeight="bold">
                Wash Status:{" "}
                <span style={{ fontWeight: "normal" }}>{item.washStatus}</span>
              </Typography>
              <Typography variant="body2" component="p" fontWeight="bold">
                Model Car:{" "}
                <span style={{ fontWeight: "normal" }}>{item.modelCar}</span>
              </Typography>
              <Typography variant="body2" component="p" fontWeight="bold">
                Total Price:{" "}
                <span style={{ fontWeight: "normal" }}>{item.totalPrice}</span>
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body2" component="div" fontWeight="bold">
                Wosher Name:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {wosher?.first_name} {wosher?.last_name}
                </span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Wosher Email:{" "}
                <span style={{ fontWeight: "normal" }}>{wosher?.email}</span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Wosher Phone:{" "}
                <span style={{ fontWeight: "normal" }}>{wosher?.phone}</span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Client Name:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {client?.first_name} {client?.last_name}
                </span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Client Email:{" "}
                <span style={{ fontWeight: "normal" }}>{client?.email}</span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Client Phone:{" "}
                <span style={{ fontWeight: "normal" }}>{client?.phone}</span>
              </Typography>

              <Stack
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
                onClick={() => showModal(<Edit {...item} />)}
                sx={{ cursor: "pointer", mt: 2 }}
              >
                <FaEdit size={20} color={theme?.palette?.primary?.main} />
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
