import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

interface Props {
  msg: string;
}

export const SnackError: React.FC<Props> = ({ msg }) => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={() => setOpen(!open)}
    >
      <Alert
        onClose={() => setOpen(!open)}
        severity="warning"
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};
