import { Button, TextField, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const TodoForm: React.FC = () => {
  return (
    <Box component={"form"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            fullWidth
            label="Task title"
            autoComplete="off"
            minRows={12}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            fullWidth
            label="Task Description"
            autoComplete="off"
            minRows={12}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
