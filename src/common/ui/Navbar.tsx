import {
  AppBar,
  Button,
  Grid,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  onOpen: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpen }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h6">Todo-App</Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Button
                onClick={onOpen}
                sx={{
                  ":hover": {
                    backgroundColor: (theme: Theme) =>
                      theme.palette.primary.dark,
                  },
                }}
                variant="outlined"
                color="secondary"
              >
                Done Tasks
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
