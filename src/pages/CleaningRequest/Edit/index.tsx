import {
  Button,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import { closeModal } from "../../../components/ModalWrapping";
import { RiCloseFill } from "react-icons/ri";

import { useProfile } from "../../../hooks/useProfile";

type Props = {
  serviceDate: string;
  washStatus: string;
  totalPrice: string | number;
  washer_id: string | number;
  client_id: string | number;
};

export const Edit = ({
  serviceDate,
  totalPrice,
  washStatus,
  washer_id,
  client_id,
}: Props) => {
  const { profile: wosher, isLoading } = useProfile({ id: washer_id });
  const { profile: client, isLoading: loadingClient } = useProfile({
    id: client_id,
  });

  return (
    <Stack p={2} width={700} position="relative">
      <RiCloseFill
        size={25}
        onClick={closeModal}
        cursor="pointer"
        style={{ position: "absolute", top: 20, right: 20 }}
      />

      <Stack gap={0.5}>
        <Stack direction="row" gap={0.5} alignItems="center">
          <Typography fontWeight={700} fontSize={16}>
            Wosher name:
          </Typography>
          <Typography fontSize={16} color="grey.100">
            {wosher?.first_name} {wosher?.last_name}
          </Typography>
        </Stack>
        <Stack direction="row" gap={0.5} alignItems="center">
          <Typography fontWeight={700} fontSize={16}>
            Wosher e-mail:
          </Typography>
          <Typography fontSize={16} color="grey.100">
            {wosher?.email}
          </Typography>
        </Stack>
        <Stack direction="row" gap={0.5} alignItems="center">
          <Typography fontWeight={700} fontSize={16}>
            Client name:
          </Typography>
          <Typography fontSize={16} color="grey.100">
            {client?.first_name} {client?.last_name}
          </Typography>
        </Stack>
        <Stack direction="row" gap={0.5} alignItems="center">
          <Typography fontWeight={700} fontSize={16}>
            Client e-mail:
          </Typography>
          <Typography fontSize={16} color="grey.100">
            {client?.email}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 2, mx: 4 }} />
      <Stack mt={1}>
        <Stack mb={2}>
          <Table>
            <TableHead>
              <TableCell>Service date</TableCell>
              <TableCell>Wash status</TableCell>
              <TableCell>Total</TableCell>
            </TableHead>
            <TableBody>
              <TableCell>{serviceDate}</TableCell>
              <TableCell>{washStatus}</TableCell>
              <TableCell>{totalPrice}</TableCell>
            </TableBody>
          </Table>
        </Stack>
        <Button
          variant="contained"
          sx={{
            width: "200px",
            textTransform: "capitalize",
            alignSelf: "flex-end",
            mr: 1,
          }}
        >
          Change wosher
        </Button>
      </Stack>
    </Stack>
  );
};
