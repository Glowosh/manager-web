import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import { RiInformationLine } from "react-icons/ri";
import { showModal } from "../ModalWrapping";
import { Validate } from "../../pages/ValidateUser/Validate";
import { theme } from "../../theme";

export const CardValidateUser = ({
  data,
  fetchProfiles,
}: {
  data: any;
  fetchProfiles: any;
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {data?.map((item: any) => {
        return (
          <Card key={item.id} style={{ width: 280 }}>
            <CardContent>
              <Typography variant="body2" component="div" fontWeight="bold">
                Full name:{" "}
                <span style={{ fontWeight: "normal" }}>{item.fullname}</span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Date of Birth:{" "}
                <span style={{ fontWeight: "normal" }}>{item.dateOfBirth}</span>
              </Typography>
              <Typography variant="body2" component="div" fontWeight="bold">
                Status:{" "}
                <span style={{ fontWeight: "normal" }}>{item.status}</span>
              </Typography>
              <Stack
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
                pt={1}
                onClick={() =>
                  showModal(
                    <Validate
                      {...item}
                      fetchProfiles={fetchProfiles}
                      isValidateUser
                    />
                  )
                }
              >
                <RiInformationLine
                  size={25}
                  cursor="pointer"
                  color={theme?.palette?.primary?.main}
                />
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
