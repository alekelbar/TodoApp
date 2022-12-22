import { Alert, Button, Drawer, List, ListItem, Theme } from "@mui/material";
import React from "react";
import { Task } from "../Task";
import { CloseOutlined } from "@mui/icons-material";
import { RootState } from "../../redux/hooks/hooks.redux";
import { useSelector } from "react-redux";

interface Props {
  open: boolean;
  onOpen: () => void;
}

export const SideBar: React.FC<Props> = ({ onOpen, open }) => {
  const data = useSelector((state: RootState) => state.todoReducer);

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={open}
      sx={{ Width: 240, overflow: "auto" }}
    >
      <Button
        fullWidth
        variant="contained"
        onClick={onOpen}
        sx={{
          ":hover": {
            backgroundColor: (theme: Theme) => theme.palette.primary.dark,
          },
        }}
      >
        <CloseOutlined />
      </Button>
      <List>
        {data
          .filter((e) => e.done)
          .map((e) => (
            <ListItem key={e.title}>
              <Task task={e} />
            </ListItem>
          ))}

        {!data.filter((e) => e.done).length && (
          <Alert variant="outlined" sx={{ width: "100%" }} severity="info">
            No data found
          </Alert>
        )}
      </List>
    </Drawer>
  );
};
