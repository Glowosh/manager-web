import { useState } from "react";
import {
  Button,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { closeModal } from "../../../components/ModalWrapping";
import { RiCloseFill } from "react-icons/ri";
import { supabase } from "../../../lib/supabase";
import { useValidationById } from "../../../hooks/useValidationById";
import { theme } from "../../../theme";

type Props = {
  fullname: string;
  id?: string;
  dateOfBirth: string;
  rowId?: string;
  fetchProfiles?: () => void;
  isValidateUser?: boolean;
};

export const Validate = ({
  dateOfBirth,
  fullname,
  id,
  rowId,
  fetchProfiles,
  isValidateUser,
}: Props) => {
  const [loading, setLoading] = useState("");
  const { profiles, isLoading } = useValidationById({
    wosher_id: id as string,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sendValidate = async (status: string) => {
    setLoading(status);

    await supabase
      .from("profiles")
      .update({ status_register: status })
      .eq("id", id as string)
      .single();
    await supabase
      .from("validation_user")
      .update({ status: status })
      .eq("id", rowId)
      .single();

    fetchProfiles && (await fetchProfiles());
    setLoading("");
    closeModal();
  };

  const loadingReject = loading === "rejected";
  const loadingApproved = loading === "approved";
  return (
    <Stack p={4} position="relative">
      <RiCloseFill
        size={25}
        onClick={closeModal}
        cursor="pointer"
        style={{ position: "absolute", top: 20, right: 20 }}
      />
      <Typography fontSize={20} fontWeight={700}>
        {fullname} - {dateOfBirth}
      </Typography>

      <Stack gap={2} direction={isMobile ? "column" : "row"} mt={2}>
        {isLoading ? (
          <>
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                variant="rectangular"
                width={isMobile ? 200 : 400}
                height={isMobile ? 200 : 400}
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            <img
              src={profiles?.face_image}
              width={isMobile ? 200 : 400}
              height={isMobile ? 200 : 400}
              style={{ objectFit: "scale-down" }}
            />
            <img
              src={profiles?.doc_image}
              width={isMobile ? 200 : 400}
              height={isMobile ? 200 : 400}
              style={{ objectFit: "scale-down" }}
            />
          </>
        )}
      </Stack>
      {isValidateUser && (
        <Stack direction="row" justifyContent="center" gap={2} mt={2}>
          <Button
            variant="contained"
            sx={{
              width: 200,
              height: 50,
              bgcolor: "error.main",
              textTransform: "capitalize",
              ":hover": {
                bgcolor: "error.light",
              },
            }}
            onClick={() => sendValidate("rejected")}
            disabled={loadingReject || loadingApproved}
          >
            {loadingReject ? (
              <CircularProgress size={18} />
            ) : (
              "Disapprove account"
            )}
          </Button>
          <Button
            variant="contained"
            sx={{ width: 200, height: 50, textTransform: "capitalize" }}
            onClick={() => sendValidate("approved")}
            disabled={loadingReject || loadingApproved}
          >
            {loadingApproved ? (
              <CircularProgress size={18} />
            ) : (
              "Approve account"
            )}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
