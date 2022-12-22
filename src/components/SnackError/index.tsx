import React from "react";
import { Alert } from "@mui/material";

interface Props {
  msg: string;
}

export const SnackError: React.FC<Props> = ({ msg }) => {
  return (
    <Alert severity="warning" sx={{ width: "100%" }}>
      {msg}
    </Alert>
  );
};
