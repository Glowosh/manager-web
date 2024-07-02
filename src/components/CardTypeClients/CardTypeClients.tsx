import { Card, CardContent, Typography } from "@mui/material";

type CardTypeClientsProps = {
  fullname: string;
  email: string;
  role: string;
};

export const CardTypeClients = ({
  fullname,
  email,
  role,
}: CardTypeClientsProps) => {
  return (
    <Card style={{ width: 250 }}>
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          Name: <span style={{ fontWeight: "normal" }}>{fullname}</span>
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Email: <span style={{ fontWeight: "normal" }}>{email}</span>
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Role: <span style={{ fontWeight: "normal" }}> {role}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
