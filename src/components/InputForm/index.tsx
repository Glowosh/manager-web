/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InputAdornment,
  Stack,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { FieldError, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { WrapperInput } from "./styles";

type Props = {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
} & Omit<TextFieldProps, "error">;

export const InputForm = ({
  label,
  error,
  register,
  name,
  ...restProps
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const type = restProps?.type;
  const typeIsPassword = type === "password";

  const changeShowPassword = () => setShowPassword(!showPassword);

  return (
    <Stack width="100%" gap={0.5}>
      <Typography fontSize={14} fontWeight="bold">
        {label}
      </Typography>
      <WrapperInput
        {...register(name)}
        {...restProps}
        type={typeIsPassword && showPassword ? "text" : type || "text"}
        error={Boolean(error)}
        InputProps={{
          endAdornment: typeIsPassword ? (
            <InputAdornment position="end">
              {showPassword ? (
                <FaEyeSlash cursor="pointer" onClick={changeShowPassword} />
              ) : (
                <FaRegEye cursor="pointer" onClick={changeShowPassword} />
              )}
            </InputAdornment>
          ) : (
            <></>
          ),
        }}
      />
      {error && (
        <Typography color="error" fontSize={14}>
          {error?.message}
        </Typography>
      )}
    </Stack>
  );
};
