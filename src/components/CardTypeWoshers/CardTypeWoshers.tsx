import { Card, CardContent, Typography } from "@mui/material";

type CardTypeWoshersProps = {
  fullname: string;
  email: string;
  role: string;
  status: string;
};

export const CardTypeWoshers = ({
  fullname,
  email,
  role,
  status,
}: CardTypeWoshersProps) => {
  return (
    <Card style={{ width: 260 }}>
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
        <Typography variant="body2" fontWeight="bold">
          Register Status:{" "}
          <span style={{ fontWeight: "normal" }}> {status}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
